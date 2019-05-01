import React from 'react';

const Person = ({ currentUser }) => {
  const { userAvatar, userName } = currentUser;
  return (
    <div>
      <img src={userAvatar} alt={userName} />
      <h3>{userName}</h3>
    </div>
  );
};

export default Person;
