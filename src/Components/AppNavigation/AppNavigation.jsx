import React from 'react';

const AppNavigation = ({ menuItems }) => {
  // console.log('menuItems in Navigation =', menuItems);
  // console.log('typeof menuItems =', typeof menuItems);
  return (
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppNavigation;
