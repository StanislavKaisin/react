import React from 'react';
import style from './Avatar.module.css';

const Avatar = ({ image = '', width = 60, height = 60 }) => {
  return (
    <img
      src={image}
      alt="app logo"
      width={width}
      height={height}
      className={style.avatar}
    />
  );
};

export default Avatar;
