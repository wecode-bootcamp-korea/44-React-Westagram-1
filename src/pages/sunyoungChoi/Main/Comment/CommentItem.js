import React from 'react';
import { IoHeartOutline, IoCloseSharp } from 'react-icons/io5';
import './CommentItem.scss';

//8. 자식영역 컴포넌트 생성
const CommentItem = ({ id, comment, removeComment }) => {
  return (
    <div className="comment-item">
      <div className="comment-wrap">
        <div className="comment-id">No.{id}</div>
        <div className="comment-text"> {comment}</div>
      </div>
      <div>
        <button className="like-icon">
          <IoHeartOutline />
        </button>
        <button className="remove-comment" onClick={() => removeComment(id)}>
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
