import React from 'react';

const SignInBtn = ({ onSubmit }) => {
  return (
    <button type="button" onClick={onSubmit}>
      Sign in
    </button>
  );
};

export default SignInBtn;
