import React from 'react';

import MenuFilter from '../MenuFilter/MenuFilter';

const MenuList = ({ menuItems, filter, onFilterChange }) => {
  return (
    <div>
      <p>Menu list</p>
      <MenuFilter filter={filter} onFilterChange={onFilterChange} />
      {menuItems.map(({ id, name, description, image, price, ingredients }) => {
        return (
          <div key={id}>
            <h3>{name}</h3>
            <img src={image} alt={name} width="500" height="300" />
            <p>
              Description:
              <br />
              {description}
            </p>
            <p>Price: {price} UAH</p>
            <div>
              Ingredients:{' '}
              {ingredients.map(ingridient => {
                return <p key={ingridient}>{ingridient}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
