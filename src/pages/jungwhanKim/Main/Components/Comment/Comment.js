import React from 'react';
import './Comment.scss';

const Comment = ({ content, handleLike, likedStatus, handleRemove }) => {
  return (
    <div className="comment">
      <div className="align-center">
        <div className="comment-id">ggkim0614</div>
        <div className="comment-content">{content}</div>
      </div>
      <div className="align-center">
        <div
          onClick={handleLike}
          className={likedStatus ? 'comment-like-clicked' : 'comment-like'}
        />
        <div onClick={handleRemove} className="deleteBtn">
          삭제
        </div>
      </div>
    </div>
  );
};

export default Comment;
