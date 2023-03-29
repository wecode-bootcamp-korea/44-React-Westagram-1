/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Img from '/Users/sun/Desktop/44-React-Westagram-1/src/assets/sunyoungChoi/mountain.jpg';
import CommentBox from '../Comment/CommentBox';
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoShareOutline,
  IoEllipsisHorizontalSharp,
} from 'react-icons/io5';
import './Bodymain.scss';

function Bodymain({ feedData }) {
  return (
    <div className="body-main">
      <div className="feeds">
        <article className="feeds-contents-wrap">
          <div className="feeds-top">
            <div className="profilebox">
              <img className="user-img" alt="user image" src={Img} />
              <div className="text-box">
                <p className="profile-name">{feedData.userName}</p>
                <p className="profile-text">{feedData.state}</p>
              </div>
            </div>
            <div>
              <IoEllipsisHorizontalSharp className="dot" />
            </div>
          </div>
          <div className="feeds-contents">
            <img
              className="contents-img"
              src={feedData.feedImage}
              alt="피드 이미지"
            />
          </div>
          <div className="contents-btn">
            <form>
              <button>
                <IoHeartOutline className="feeds-icon" />
              </button>
              <button>
                <IoChatbubbleOutline className="feeds-icon" />
              </button>
              <button>
                <IoShareOutline className="feeds-icon" />
              </button>
            </form>
            <form>
              <button>
                <IoBookmarkOutline className="feeds-icon" />
              </button>
            </form>
          </div>
          <div className="contents-bottom">
            <div className="commend-wrap">
              <div className="like-count-box">
                <img className="user-img-small" src={feedData.feedImages} />
                <p className="like-count">
                  {feedData.like.likeUser}님 외 {feedData.like.likeCount}명이
                  좋아합니다
                </p>
              </div>
              <div className="user-feed"> {feedData.content} </div>
              <CommentBox />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Bodymain;
