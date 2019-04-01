import React from 'react';
import SignInBtn from '../SignInBtn/SignInBtn';
import SignUpBtn from '../SignUpBtn/SignUpBtn';

const SignInForm = ({ onSubmit }) => {
  return (
    <form action="">
      <SignInBtn onSubmit={onSubmit} />
      <SignUpBtn onSubmit={onSubmit} />
      <br />
      <input type="email" placeholder="email" />
      <br />
      <input type="text" placeholder="password" />
      <br />
      <SignInBtn onSubmit={onSubmit} />
    </form>
  );
};

export default SignInForm;
