/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Bodymain() {
  return (
    <div className="bodymain">
      <div className="feeds">
        <article className="feeds-contents-wrap">
          <div className="feedsTop">
            <img
              className="user-img"
              src="./img/주아 프로필사진.jpeg"
            />
            <p className="user-name">HappyDog^^</p>
            <p className="dot">...</p>
          </div>
          <div className="feeds-contents">
            <img
              className="contents-img"
              src="./img/주아 메인 사진.jpeg"
              alt="피드 이미지"
            />
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
          <div className="feeds-contents-bottom">
            <div className="commend-wrap">
              <div className="like-count-box">
                <img
                  className="user-img-small"
                  src="./img/karsten-winegeart-vH183sGZmiE-unsplash.jpg"
                />
                <p className="like-count">aineworld님 외 10명이 좋아합니다</p>
              </div>
            </div>
            <form className="write-comment-box">
              <ul className="commentUl" />
              <input
                className="input-text"
                type="text"
                placeholder="댓글달기..."
              />
              <button id="upload-btn" type="button">
                게시
              </button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Bodymain;
