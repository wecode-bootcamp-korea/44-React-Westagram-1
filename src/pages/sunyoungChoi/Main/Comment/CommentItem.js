import React, { useState } from 'react';
import { IoHeartOutline, IoCloseSharp, IoHeartSharp } from 'react-icons/io5';
import './CommentItem.scss';

//8. 자식영역 컴포넌트 생성
const CommentItem = ({ id, comment, removeComment }) => {
  const [like, setLike] = useState(false);

  // const clickHeart = () => {
  //   if(clickCount % 2 !== 0){
  //       return false;
  //     } else if ((clickCount % 2 === 0)){
  //       return true;
  //     }
  //   }
  // }

  //하트의 boolean 구별함수
  const handleClick = () => {
    setLike(!like);
  };

  return (
    <div className="comment-item">
      <div className="comment-wrap">
        <div className="comment-id">No.{id}</div>
        <div className="comment-text"> {comment}</div>
      </div>
      <div className="button-wrap">
        {/* <button className="like-icon" onClick={() => clickHeart()}>
          <IoHeartOutline className="icon" />
          <IoHeartSharp className="icon" />
        </button> */}
        {/* <button onClick={() => setLike(prevLike => !prevLike)}> */}
        <button className="heart-icon" onClick={handleClick}>
          {like ? (
            <IoHeartSharp className="on-heart" />
          ) : (
            <IoHeartOutline className="off-heart" />
          )}
        </button>
        <button className="remove-comment" onClick={() => removeComment(id)}>
          <IoCloseSharp className="icon" />
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
