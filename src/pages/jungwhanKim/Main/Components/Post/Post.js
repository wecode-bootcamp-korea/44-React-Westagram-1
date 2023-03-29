import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
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
  const [comments, setComments] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [postLiked, setPostLiked] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleDelete = () => {
    setModalOpen(!modalOpen);
  };

  const handleComment = event => {
    setInputValue(event.target.value);
  };

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

  const handleCommentLike = id => {
    setComments(
      comments?.map(comment =>
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
        <div className="article-menu-container">
          <FiMoreHorizontal
            onClick={handleToggleDelete}
            className="article-menu"
          />
          {modalOpen ? (
            <div onClick={handleRemovePost} className="close-modal">
              <RiDeleteBin2Fill />
              <div>삭제</div>
            </div>
          ) : (
            <></>
          )}
        </div>
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
