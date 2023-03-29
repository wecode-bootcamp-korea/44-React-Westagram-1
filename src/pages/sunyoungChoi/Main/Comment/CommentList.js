/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CommentItem from './CommentItem';
import './CommentList.scss';

//7. 부모영역 컴포넌트 생성
//8. CommentBox로 받은 댓글 배열을 풀어서,
//commentValue를 자식컴포에게 item으로 props 보내주기

//문제 발생!!유니크한 키값을 못받아오고 있는 상태,
//map을 돌릴 key 값을 최상단에 입력,
//mapping을 돌릴 키값을 부여했으나, 자식 컴포넌트 <CommentItem/>에서 사용하는 comment.key를 못가져옴,
//자식 컴포넌트에는 id라는 다른 이름을 부여해서 넘김.

const CommentList = ({ commentValue, removeComment }) => {
  return (
    <div className="comment-list">
      {commentValue.map(comment => (
        <React.Fragment key={comment.key}>
          <CommentItem
            id={comment.key}
            comment={comment.comment}
            removeComment={removeComment}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CommentList;
