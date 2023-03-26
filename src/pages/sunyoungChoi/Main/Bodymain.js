/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Img from '../../../assets/sunyoungChoi/mountain.jpg';
import ProfileBox from './ProfileBox';
import CommentBox from '../Main/act/CommentBox';
import './Bodymain.scss';

function Bodymain() {
  return (
    <div className="body-main">
      <div className="feeds">
        <article className="feeds-contents-wrap">
          <div className="feeds-top">
            <ProfileBox />
            <p className="dot">...</p>
          </div>
          <div className="feeds-contents">
            <img className="contents-img" src={Img} alt="피드 이미지" />
          </div>
          <div className="contents-btn">
            <form>
              <button>
                <i className="fa-regular fa-heart" />
              </button>
              <button>
                <i className="fa-regular fa-comment" />
              </button>
              <button>
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </button>
            </form>
            <form>
              <button>
                <i className="fa-regular fa-bookmark" />
              </button>
            </form>
          </div>
          <div className="contents-bottom">
            <div className="commend-wrap">
              <div className="like-count-box">
                <img className="user-img-small" src={Img} />
                <p className="like-count">aineworld님 외 10명이 좋아합니다</p>
              </div>
              <CommentBox />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Bodymain;
