import React from 'react';

const SignInBtn = ({ onSubmit }) => {
  // console.log('typeof menuItems =', typeof menuItems);
  return (
    <button type="button" onClick={onSubmit}>
      Sign in
    </button>
  );
};

export default SignInBtn;
