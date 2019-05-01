import React from 'react';

const MenuItemRating = ({
  rating,
  currentRating,
  onChange,
  onChangeRating,
}) => {
  return (
    <div>
      <br />
      <p>Rating of the dish: {rating}</p>
      <form action="" onSubmit={onChangeRating}>
        <select
          name="currentRating"
          value={currentRating}
          id=""
          onChange={onChange}
        >
          <option value="" disabled>
            ...
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <button type="submit">Rate the dish!</button>
      </form>
    </div>
  );
};

export default MenuItemRating;
