'use client';
import { Button } from '@mui/material';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormNotification } from '@/component/Auth/FormNotification';
import fieldsParams from '@/component/Blogs/CommentsForm/fieldsParams';
import { FormInput } from '@/component/common/FormInput';
import { Loader } from '@/component/common/Loader';
import { CommentsFormProps, handlerProps } from './CommentsForm.props';

import d from '@/data/comments.json';

export const CommentsForm = ({ setIsFormOpen, blog_id, user_id }: CommentsFormProps) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const STORAGE_KEY = 'Comments';
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

  const onSubmitHandler = async (data: handlerProps) => {
    const { text } = data;

    try {
      setIsSending(true);

      const { data, error } = await supabase
        .from('comments')
        .insert([{ author_id: user_id, text, blog_id }])
        .select();

      router.refresh();

      if (data) {
        setIsSending(false);
        setFinalMessage(d.messages.sent);
        reset();
        setIsFormOpen(false);
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
      <form onSubmit={handleSubmit(onSubmitHandler)} className="p-6 text-center ">
        {d.fields.map((field, ind) => (
          <FormInput
            key={ind}
            data={field}
            reg={register}
            showErrors
            errors={errors}
            options={fieldsParams[field.name as keyof typeof fieldsParams]}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          className="text-white bg-main_card hover:bg-main_dark"
        >
          {d.button.add}
        </Button>
      </form>
      {isSending && <Loader />}
    </>
  ) : error ? (
    <FormNotification forError subText={finalMessage} />
  ) : (
    <FormNotification subText={finalMessage} />
  );
};
