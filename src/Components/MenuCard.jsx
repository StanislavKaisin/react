import React from 'react';

const MenuCard = ({ name, image, price, onShowMoreInfo, onDelete }) => {
  return (
    <div>
      <img src={image} alt={name} width={300} heigh={300} />
      <p>{name}</p>
      <p>{price}</p>
      <div className="actions">
        <button type="button" onClick={onShowMoreInfo}>
          More info
        </button>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
