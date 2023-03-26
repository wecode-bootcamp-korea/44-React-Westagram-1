/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CommentItem from './CommentItem';
// import CloseButton from './CloseButton';

import './CommentList.scss';

//7. 부모영역 컴포넌트 생성
//8. CommentBox로 받은 댓글 배열을 풀어서,
//commentValue를 자식컴포에게 item으로 props 보내주기

const CommentList = props => {
  return (
    <div className="comment-list">
      {props.commentValue.map(item => (
        <div>
          <CommentItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
