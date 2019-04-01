import React from 'react';

const SignUpBtn = ({ onSubmit }) => {
  return (
    <button type="button" onClick={onSubmit}>
      Sign up
    </button>
  );
};

export default SignUpBtn;
