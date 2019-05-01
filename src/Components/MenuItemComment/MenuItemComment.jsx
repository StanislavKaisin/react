import React from 'react';
import CommentsList from '../CommentsList/CommentsList';

const MenuItemComment = ({
  comment,
  currentComment,
  onChange,
  onAddComment,
}) => {
  return (
    <section>
      <div className="CommentsList">
        <p>Our clients recommend:</p>
        {/* component that shows comments from state */}
        <CommentsList commentsList={comment} />
      </div>
      <form action="" onSubmit={onAddComment}>
        <textarea
          name="currentComment"
          id=""
          cols="34"
          rows="5"
          placeholder="Add your comment"
          value={currentComment}
          onChange={onChange}
        />
        <br />
        <button type="submit">Add commnet</button>
      </form>
    </section>
  );
};

export default MenuItemComment;
