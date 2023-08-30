'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormNotification } from '@/component/Auth/FormNotification';
import FormInputProps from '@/component/Auth/RegisterForm/RegisterForm.props';
import fieldsParams from '@/component/Auth/RegisterForm/fieldsParams';
import { FormInput } from '@/component/common/FormInput';
import { Loader } from '@/component/common/Loader';

import d from '@/data/auth.json';

export const LoginForm = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const STORAGE_KEY = 'registerForm';

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

  const onSubmitHandler = async (data: FormInputProps) => {
    try {
      setIsSending(true);
      const result = data;
      //   const result = await sendToTlg(data);
      if (result.ok) {
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
