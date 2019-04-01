import React from 'react';
import MainLogo from '../MainLogo/MainLogo';

const AppHeader = ({ children }) => {
  return (
    <header>
      <MainLogo />
      {children}
    </header>
  );
};
export default AppHeader;
