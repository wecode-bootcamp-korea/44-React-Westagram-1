import React, { useState } from 'react';
import CommentList from './CommentList';

import './CommentBox.scss';

const CommentBox = () => {
  //1. 인풋의 값을 가져와서 저장하는 state / 기본값 빈 string 값
  const [inputValue, setInputValue] = useState('');

  //4.addItem에 사용될 state / 기본값을 배열로, 왜냐? 어려개의 값을 담아야 해서!
  const [commentValue, setCommentValue] = useState([]);
  // const [userId, setuserId] = useState();

  //3. 클릭할때, 댓글 아이템을 추가해야됨, 어디에다 저장해야될지 정의하는 함수, 저장할 장소 새로운 state에
  const addItem = () => {
    // const id = Date.now();
    // const inputValue = { inputValue };

    setCommentValue([
      ...commentValue,
      { key: Date.now(), comment: inputValue },
    ]);
    setInputValue('');
  };

  const removeComment = key => {
    // console.log(key);
    setCommentValue(
      commentValue.filter(inputValue => {
        return inputValue.key !== key;
      })
    );
  };

  // const removeComment = id => {
  //   // console.log(key);
  //   setCommentValue(
  //     commentValue.filter(inputValue => {
  //       return inputValue.id !== id;
  //     })
  //   );
  // };

  //onsubmit 창이 쓸데없이 새로고침됨을 방지하는 코드
  const onSubmit = e => {
    e.preventDefault();
  };

  //댓들을 입력하고 엔터를 누르면 입력되는 코드
  const onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addItem();
    }
  };

  //2. input의 값과 input값을 추적하는 onChange에 state적용
  //5. 댓글을 입력할 부모영역인 Comment list컴포넌트와 그 안에 들어갈 자식 컴포넌트 Comment List를 만듦
  //6~8. 들어가는칸에 부모영역인 Comment list컴포넌트 집어 넣기
  //9. <CommentList />로 props 보내기
  return (
    <div className="comment-box">
      <form className="write-comment-box" onSubmit={onSubmit}>
        <div className="comment-ul">
          <CommentList
            commentValue={commentValue}
            removeComment={removeComment}
          />
        </div>
        <input
          value={inputValue}
          onKeyDown={onKeyDown}
          onChange={e => setInputValue(e.target.value)}
          className="input-text"
          type="text"
          placeholder="댓글달기..."
        />
        <button onClick={addItem} id="upload-btn" type="button">
          게시
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
