import React from 'react';
import RateDishBtn from '../RateDishBtn/RateDishBtn';
import AddCommentBtn from '../AddCommentBtn/AddCommentBtn';

const MenuItemComment = ({ comment, rating, onChange }) => {
  // console.log('onSubmit =', onSubmit);
  return (
    <section>
      <div className="CommentsList">
        <p>Our clients recommend:</p>
        <ul>
          <li>Amazing dish!</li>
        </ul>
      </div>
      <form action="">
        <textarea
          name=""
          id=""
          cols="34"
          rows="5"
          placeholder="Add your comment"
          value={comment}
          onChange={onChange}
        />
        <br />
        <AddCommentBtn />
        <br />
        <select
          name="rating"
          value={rating}
          id=""
          // onChange={this.handleChange}
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
        <RateDishBtn />
      </form>
    </section>
  );
};

export default MenuItemComment;
