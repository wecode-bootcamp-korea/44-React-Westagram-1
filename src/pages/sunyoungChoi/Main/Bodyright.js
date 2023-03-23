/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Profilebox() {
  return (
    <div className="profile-box">
      <img className="user-img" alt="user image" />
      <div>
        <p className="user-name" />
        <p className="text" />
      </div>
    </div>
  );
}

function Bodyright() {
  return (
    <div className="body-right">
      <div className="main-right">
        <div className="main-right-profile">
          <img className="user-img" src="주아 프로필 사진.jpeg" />
          <p className="user-name">HappyDog^^</p>
        </div>

        <div className="main-right-top">
          <div className="main-right-top-menu">
            <span className="text-color-gray">스토리</span>
            <span>모두보기</span>
          </div>
          <div className="main-right-top-contents">
            <Profilebox />
            <Profilebox />
            <Profilebox />
            <Profilebox />
          </div>
        </div>

        <div className="main-right-bottom">
          <div className="main-right-bottom-menu">
            <span className="text-color-gray">회원님을 위한 추천</span>
            <span>모두보기</span>
          </div>
          <div className="main-right-bottom-contents">
            <Profilebox />
            <Profilebox />
            <Profilebox />
            <Profilebox />
          </div>
        </div>
      </div>

      <div className="main-right-footer">
        <p>
          Westargram
          정보.지원.홍보센터.API.채용정보.개인정보처리방침.약관.디렉터리.프로필.해시태그.언어
        </p>
        <p>©2023 WESTARGRAM</p>
      </div>
    </div>
  );
}

export default Bodyright;
