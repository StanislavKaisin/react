import React from 'react';
import Logo from '../Logo/Logo';
import appLogo from './assets/logo.svg';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import avatar from './assets/logo1.svg';
import styles from './AppHeader.module.css';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo image={appLogo} width={70} height={70} />
      </div>
      <div className="menu">
        <Navigation items={navItems} />
      </div>
      <div className={styles.usermenu}>
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
