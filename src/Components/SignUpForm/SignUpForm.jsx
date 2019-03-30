import React from 'react';
import SignInBtn from '../SignInBtn/SignInBtn';
import SignUpBtn from '../SignUpBtn/SignUpBtn';

const SignUpForm = ({ onSubmit }) => {
  return (
    <form action="">
      <SignInBtn onSubmit={onSubmit} />
      <SignUpBtn onSubmit={onSubmit} />
      <br />
      <input type="text" placeholder="name" />
      <br />
      <input type="email" placeholder="email" />
      <br />
      <input type="text" placeholder="phone" />
      <br />
      <input type="text" placeholder="password" />
      <br />
      <SignUpBtn onSubmit={onSubmit} />
    </form>
  );
};

export default SignUpForm;
