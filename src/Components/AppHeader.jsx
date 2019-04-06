import React from 'react';
import Logo from './Logo';
import appLogo from '../logo.svg';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import avatar from '../logo1.svg';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <Logo image={appLogo} width={70} height={70} />
      </div>
      <div className="menu">
        <Navigation items={navItems} />
      </div>
      <div className="Header__usermenu">
        <UserMenu avatar={avatar} name="Bob Ross" />
      </div>
    </header>
  );
};

export default AppHeader;

// console.log('appLogo=', appLogo);
/*
const AppHeader = ({ children }) => {
  return (
    <header>
      App Header
      {children}
    </header>
  );
};
*/
// slots pattern
/*
const AppHeader = ({ logo, menu, usermenu }) => {
  return (
    <header>
      <div className="logo">{logo}</div>
      <div className="menu">{menu}</div>
      <div className="usermenu">{usermenu}</div>
    </header>
  );
};
*/
