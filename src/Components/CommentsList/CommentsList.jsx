import React from 'react';

const CommentsList = ({ commentsList }) => {
  return (
    <ul>
      {commentsList.map(comment => {
        return <li key={comment}>{comment}</li>;
      })}
    </ul>
  );
};

export default CommentsList;
