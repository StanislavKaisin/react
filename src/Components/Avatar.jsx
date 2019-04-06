import React from 'react';

const Avatar = ({ image = '', width = 60, height = 60 }) => {
  return (
    <img
      src={image}
      alt="app logo"
      width={width}
      height={height}
      className="Avatar"
    />
  );
};

export default Avatar;
