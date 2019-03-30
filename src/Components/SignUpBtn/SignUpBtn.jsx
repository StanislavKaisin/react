import React from 'react';

const SignUpBtn = ({ onSubmit }) => {
  // console.log('onSubmit =', onSubmit);
  return (
    <button type="button" onClick={onSubmit}>
      Sign up
    </button>
  );
};

export default SignUpBtn;
