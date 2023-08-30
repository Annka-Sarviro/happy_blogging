'use client';
import { useState } from 'react';

import { LoginForm } from '@/component/Auth/LoginForm';
import { RegisterForm } from '@/component/Auth/RegisterForm';

import data from '@/data/auth.json';

export default function AuthPage() {
  const [isHaveAccount, setIsHaveAccount] = useState(false);

  const handelClick = () => {
    setIsHaveAccount(!isHaveAccount);
  };
  return (
    <div className="container">
      <h1>{data.title}</h1>
      <h2>{isHaveAccount ? data.subtitleLogin : data.subtitleReg}</h2>
      {isHaveAccount ? <LoginForm /> : <RegisterForm />}

      <p className="inline-block"> {!isHaveAccount ? data.routText.login : data.routText.reg} </p>
      <button
        onClick={handelClick}
        className="inline-block text-dark hover:text-accent underline underline-offset-2 "
      >
        {!isHaveAccount ? data.button.login : data.button.reg}
      </button>
    </div>
  );
}
