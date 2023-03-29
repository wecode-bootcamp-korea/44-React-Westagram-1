import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlinePaperAirplane, HiOutlineBookmark } from 'react-icons/hi';
import './Post.scss';

const Post = ({
  account,
  profileImg,
  location,
  verified,
  postImg,
  content,
  createdAt,
  handleRemovePost,
}) => {
  // 댓글 섹션에 맵핑할 댓글 배열 선언
  const [comments, setComments] = useState([]);

  // 포스트 댓글 게시 인풋창 상태값 및 변경용 훅 정의
  const [inputValue, setInputValue] = useState('');

  const [postLiked, setPostLiked] = useState(false);

  // 댓글 게시 입력창 이벤트 핸들러
  const handleComment = event => {
    setInputValue(event.target.value);
  };

  // 댓글 서브밋 액션시 이벤트 핸들러
  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue === '') {
      alert('게시 전 내용을 입력해주세요!');
      return;
    }

    const newComment = {
      id: comments.length,
      content: inputValue,
      liked: false,
    };

    setComments([...comments, newComment]);
    setInputValue('');
  };

  // 좋아요 하트를 누르면 호출
  const handleCommentLike = id => {
    //각 댓글의 id를 인자로 받아와서
    setComments(
      comments?.map(comment =>
        // 현재 댓글들을 맵핑한 후,
        // 인자로 받아온 객체의 id와 맵핑 중인 요소의 id가 같으면, 맵핑하는 comment 객체를 구조분해할당하여 나머지는 spread 연산자로 냅두고, liked key의 값만 추출하여 반대 값으로 바꾼다.
        // id가 일치하지 않는, 즉 클릭된 댓글을 제외한 모든 댓글은 그대로 comment 객체로 수정 없이 유지된다.
        comment.id === id ? { ...comment, liked: !comment.liked } : comment
      )
    );
  };

  const handleRemove = id => {
    const newComments = comments.filter(item => id !== item.id);
    setComments(newComments);
  };

  const handlePostLike = () => {
    setPostLiked(!postLiked);
  };
  return (
    <div className="post">
      <div className="article-top">
        <div className="align-center">
          <div
            className="account-pic"
            style={{
              backgroundImage: `url(${profileImg})`,
            }}
          />
          <div className="account-name">
            <div className="align-center">
              <div className="account-name-main">{account}</div>
              {verified ? <div className="blue-check" /> : null}
            </div>
            <div className="account-name-sub">{location}</div>
          </div>
        </div>
        <FiMoreHorizontal onClick={handleRemovePost} className="article-menu" />
      </div>
      <div
        className="post-img"
        style={{
          backgroundImage: `url(${postImg})`,
        }}
      />
      <div className="third-row">
        <div className="align-center">
          {postLiked ? (
            <FaHeart className="like-clicked" onClick={handlePostLike} />
          ) : (
            <FaRegHeart className="like" onClick={handlePostLike} />
          )}
          <FaRegComment className="comment-icon" />
          <HiOutlinePaperAirplane className="share-icon" />
        </div>
        <HiOutlineBookmark className="save-icon" />
      </div>
      <div className="align-center">
        <div className="account-pic-sm" />
        <div className="post-status-msg">
          <span className="bolded">{account}</span>님{' '}
          <span className="bolded">외 124명</span>이 좋아합니다
        </div>
      </div>
      <div className="dummy-comment">
        <div className="align-center">
          <div className="bolded">{account}&nbsp;</div>
          <div className="content-wrapper">
            <p>{content}</p>
          </div>
        </div>
      </div>
      <div className="comments">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            content={comment.content}
            handleLike={() => handleCommentLike(comment.id)}
            likedStatus={comment.liked}
            handleRemove={() => handleRemove(comment.id)}
          />
        ))}
      </div>
      <div className="time-posted">{createdAt}</div>
      <div className="comment-input">
        <form onSubmit={handleSubmit}>
          <input
            name="comment"
            type="text"
            placeholder="댓글 달기..."
            onInput={handleComment}
            value={inputValue}
          />
          <button className="add-button">게시</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
