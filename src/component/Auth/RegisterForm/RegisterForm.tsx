'use client';

import { Button } from '@mui/material';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormNotification } from '@/component/Auth/FormNotification';
import { FormInput } from '@/component/common/FormInput';
import { Loader } from '@/component/common/Loader';
import d from '@/data/auth.json';
// import FormInputProps from './RegisterForm.props';
import { Select } from '@/component/common/Select';
import { useRouter } from 'next/navigation';
import fieldsParams from './fieldsParams';

export const RegisterForm = () => {
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
    const { email, password, username, roles } = data;
    console.log(data);
    try {
      setIsSending(true);
      const result = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
          data: {
            username: username,
            roles,
            email,
          },
        },
      });
      router.refresh();

      setIsSending(false);
      setFinalMessage(d.messages.sent);
      console.log(finalMessage);
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
      console.log('sdfsf');
      setFinalMessage(d.messages.error);
    }
  };

  return !error && !finalMessage ? (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="max-w-[480px] mx-auto">
        {d.fields.map((field, ind) =>
          field.type === 'select' ? (
            <Select
              key={ind}
              data={field}
              reg={register}
              errors={errors}
              options={fieldsParams[field.name as keyof typeof fieldsParams]}
            />
          ) : (
            <FormInput
              key={ind}
              data={field}
              reg={register}
              errors={errors}
              showErrors
              options={fieldsParams[field.name as keyof typeof fieldsParams]}
            />
          )
        )}
        {isSending ? (
          <Loader />
        ) : (
          <Button type="submit" variant="contained" className=" bg-main_card hover:bg-main_dark">
            {d.button.reg}
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
