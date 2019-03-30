import React from 'react';

const MenuFilter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={onFilterChange}
      placeholder="search"
    />
  );
};

export default MenuFilter;
