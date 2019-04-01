import React from 'react';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import Person from '../Person/Person';

const UserMenu = ({ currentUser, userMenuItems }) => {
  return (
    <div>
      <Person currentUser={currentUser} />
      <ul>
        {userMenuItems.map(item => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <LogOutBtn />
    </div>
  );
};

export default UserMenu;
