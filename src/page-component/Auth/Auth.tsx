'use client';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';

import { LoginForm } from '@/component/Auth/LoginForm';
import { RegisterForm } from '@/component/Auth/RegisterForm';

import data from '@/data/auth.json';

export const Auth = () => {
  const [isHaveAccount, setIsHaveAccount] = useState(true);

  const handelClick = () => {
    setIsHaveAccount(!isHaveAccount);
  };
  return (
    <div className="container text-center h-[80vh] ">
      <Typography variant="h4" component="h1">
        {data.title}
      </Typography>
      <Typography variant="h5" component="h2" className="pb-4">
        {isHaveAccount ? data.subtitleLogin : data.subtitleReg}
      </Typography>
      {isHaveAccount ? <LoginForm /> : <RegisterForm />}
      <div className="flex items-baseline justify-center mt-4">
        <Typography variant="subtitle2" component="p" className="inline-block">
          {!isHaveAccount ? data.routText.login : data.routText.reg}{' '}
        </Typography>
        <Button
          variant="text"
          onClick={handelClick}
          className=" hover:bg-white font-montserrat hover:text-main_dark  !lowercase !p-0"
        >
          {!isHaveAccount ? data.button.login : data.button.reg}
        </Button>
      </div>
    </div>
  );
};
