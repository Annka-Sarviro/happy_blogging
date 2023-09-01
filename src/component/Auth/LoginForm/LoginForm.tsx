'use client';
import { Button } from '@mui/material';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormNotification } from '@/component/Auth/FormNotification';
import { FormInput } from '@/component/common/FormInput';
import { Loader } from '@/component/common/Loader';
import d from '@/data/auth.json';
import { Database } from '@/lib/database.types';
import { FieldValues } from 'react-hook-form';

export const LoginForm = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const STORAGE_KEY = 'loginForm';
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'all',
  });

  const isBrowser = typeof window != 'undefined';
  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? window.sessionStorage : undefined,
  });

  const onSubmitHandler = async (data: FieldValues) => {
    const { email, password } = data;
    try {
      setIsSending(true);

      const result = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      router.refresh();

      setIsSending(false);
      setFinalMessage(d.messages.login);
      reset();

      sessionStorage.removeItem(STORAGE_KEY);

      if (result.error) {
        setIsSending(false);
        setError(true);
        setFinalMessage(d.messages.error);
        router.push('/');
      }
    } catch (error) {
      setIsSending(false);
      setError(true);
      setFinalMessage(d.messages.error);
    }
  };

  return !error && !finalMessage ? (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="max-w-[480px] mx-auto">
        {d.fieldsLogin.map((field, ind) => (
          <FormInput key={ind} data={field} reg={register} errors={errors} />
        ))}
        {isSending ? (
          <Loader />
        ) : (
          <Button variant="contained" className=" bg-main_card hover:bg-main_dark" type="submit">
            {d.button.login}
          </Button>
        )}
      </form>
    </>
  ) : error ? (
    <FormNotification forError subText={finalMessage} />
  ) : (
    <FormNotification subText={finalMessage} />
  );
};
