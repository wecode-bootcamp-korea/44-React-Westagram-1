import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
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
        {likedStatus ? (
          <FaHeart className="comment-like-clicked" onClick={handleLike} />
        ) : (
          <FaRegHeart className="comment-like" onClick={handleLike} />
        )}
        <div onClick={handleRemove} className="delete-btn">
          삭제
        </div>
      </div>
    </div>
  );
};

export default Comment;
