import React from 'react';
import styles from './Navigation.module.css';

// const styles = {
//   list: {
//     display: 'flex',
//   },
// };

const Navigation = ({ items }) => {
  // console.log(styles);
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item}>
          <a href="/" className={styles.link}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
