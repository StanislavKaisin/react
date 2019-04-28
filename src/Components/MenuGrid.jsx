import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items, onShowMoreInfo, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        // console.log('items=', items);
        return (
          <li key={item.id}>
            <MenuCard
              name={item.name}
              image={item.image}
              price={item.price}
              onShowMoreInfo={() => onShowMoreInfo(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuGrid;
