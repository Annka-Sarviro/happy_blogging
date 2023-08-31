'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormNotification } from '@/component/Auth/FormNotification';
import fieldsParams from '@/component/Auth/RegisterForm/fieldsParams';
import { FormInput } from '@/component/common/FormInput';
import { Loader } from '@/component/common/Loader';
import d from '@/data/auth.json';
// import { supabase } from '@/lib/initSupabase';

export const LoginForm = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const STORAGE_KEY = 'registerForm';
  const router = useRouter();
  const supabase = createClientComponentClient<any>();

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

  const onSubmitHandler = async (data: any) => {
    const { email, password } = data;
    try {
      setIsSending(true);

      const result = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      router.refresh();
      if (result) {
        setIsSending(false);
        setFinalMessage(d.messages.sent);
        reset();

        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      setIsSending(false);
      setError(true);
      setFinalMessage(d.messages.error);
    }
  };

  return !error && !finalMessage ? (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {d.fieldsLogin.map((field, ind) => (
          <FormInput
            key={ind}
            data={field}
            reg={register}
            errors={errors}
            options={fieldsParams[field.name as keyof typeof fieldsParams]}
          />
        ))}
        <button type="submit">{d.button.login}</button>
      </form>
      {isSending && <Loader />}
    </>
  ) : error ? (
    <FormNotification forOrdering forError subText={finalMessage} />
  ) : (
    <FormNotification forOrdering subText={finalMessage} />
  );
};
