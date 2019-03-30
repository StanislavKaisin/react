import React from 'react';
import MainLogo from '../MainLogo/MainLogo';
// import AppNavigation from '../AppNavigation/AppNavigation';
// import UserMenu from '../UserMenu/UserMenu';

const AppHeader = ({ children }) => {
  // console.log('menuItems =', menuItems);
  return (
    <header>
      <MainLogo />
      {children}
    </header>
  );
};
export default AppHeader;
