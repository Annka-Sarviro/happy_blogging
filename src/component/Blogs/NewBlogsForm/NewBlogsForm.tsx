'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormNotification } from '@/component/Auth/FormNotification';
import fieldsParams from '@/component/Blogs/NewBlogsForm/fieldsParams';
import { FormInput } from '@/component/common/FormInput';
import { Loader } from '@/component/common/Loader';
import d from '@/data/blogs.json';
import { Button } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { NewBlogProps } from '../NewBlogs/NewBlogProps.props';

export const NewBlogsForm = ({ id }: NewBlogProps) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const STORAGE_KEY = 'newBlogForm';
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

  const onSubmitHandler = async (data: FieldValues) => {
    const { title, text } = data;
    try {
      setIsSending(true);

      const { data, error } = await supabase
        .from('blogs')
        .insert([{ title, text, owner: id }])
        .select();

      router.refresh();

      if (data) {
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
      <form onSubmit={handleSubmit(onSubmitHandler)} className="p-6 text-center !w-[350px]">
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
        <Button variant="contained" type="submit" className=" bg-main_card hover:bg-main_dark ">
          {d.button.text}
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
