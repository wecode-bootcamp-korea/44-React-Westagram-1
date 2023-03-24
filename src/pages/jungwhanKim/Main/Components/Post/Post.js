import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import './Post.scss';

const Post = () => {
  // 댓글 섹션에 맵핑할 댓글 배열 선언
  const [comments, setComments] = useState([]);

  // 포스트 댓글 게시 인풋창 상태값 및 변경용 훅 정의
  const [commentInput, setCommentInput] = useState('');

  // 댓글 게시 입력창 이벤트 핸들러
  const handleComment = event => {
    setCommentInput(event.target.value);
  };

  // 댓글 서브밋 액션시 이벤트 핸들러
  const handleSubmit = event => {
    event.preventDefault();
    if (commentInput === '') {
      alert('게시 전 내용을 입력해주세요!');
      return;
    }

    setComments([...comments, commentInput]);
    setCommentInput('');
  };

  const handleRemove = id => {
    // newComments라는 comments의 상태값을 복사한 배열을 생성, 이후 매핑하여 클릭했던 아이템의 key와 index값이 일치하지 않은 아이템들만 filter하여 새로운 배열에 생성; 이후 배열을 새 상태값으로 지정
    const newComments = comments.filter((item, i) => id !== i);
    setComments(newComments);
  };

  return (
    <div className="post">
      {/* <!--포스트 첫번째 로우--> */}
      <div className="article-top">
        <div className="align-center">
          <div className="account-pic" />
          <div className="account-name">
            <div className="align-center">
              <div className="account-name-main">wecode_bootcamp</div>
              <div className="blue-check" />
            </div>
            <div className="account-name-sub">위워크 선릉 2호점</div>
          </div>
        </div>
        <div className="article-menu" />
      </div>
      {/* <!--포스트 사진--> */}
      <div className="post-img" />
      {/* <!--3번째 로우/하트, 공유 기능들--> */}
      <div className="third-row">
        <div className="align-center">
          <div className="like-clicked" />
          <div className="comment-img" />
          <div className="share-img" />
        </div>
        <div className="save-img" />
      </div>
      {/* <!--4번째 로우/포스트 라이크 상태--> */}
      <div className="align-center">
        <div className="account-pic-sm" />
        <div className="post-status-msg">
          <span className="bolded">wecode_bootcamp</span>님{' '}
          <span className="bolded">외 124명</span>이 좋아합니다
        </div>
      </div>
      {/* dummy comment below */}
      <div className="dummy-comment">
        <div className="align-center">
          <div className="comment-id">wecode_bootcamp</div>
          <div className="align-center">
            <div>🌊🚢 44기는 오늘도 순항 중입니다! 🙌🙌🙌 ...</div>
            <div className="see-more">더 보기</div>
          </div>
        </div>
      </div>
      <div className="comments">
        {/* <!--Comment components will be mapped below--> */}
        {comments.map((comment, i) => (
          <Comment
            key={i}
            content={comments[i]}
            handleRemove={() => handleRemove(i)}
          />
        ))}
      </div>
      <div className="time-posted">54분 전</div>
      <div className="comment-input">
        {/* <!--댓글 입력창--> */}
        <form onSubmit={handleSubmit}>
          <input
            name="comment"
            type="text"
            placeholder="댓글 달기..."
            onInput={handleComment}
            value={commentInput}
          />
          {/* <!--게시 버튼--> */}
          <button className="add-button">게시</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
