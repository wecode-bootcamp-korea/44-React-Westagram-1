/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ProfileBox from './ProfileBox';
import './Bodyright.scss';

function Bodyright() {
  return (
    <div className="bodyright">
      <div className="right-total-wrap">
        <div className="right-main-profile">
          <ProfileBox />
          {/* <img className="user-img" src={Img} />
          <p className="user-name">HappyDog^^</p> */}
        </div>

        <div className="right-top">
          <div className="right-menu">
            <span className="text-size gray">스토리</span>
            <span className="text-size blue">모두보기</span>
          </div>
          <div className="profiles-wrap-1">
            <ProfileBox />
            <ProfileBox />
            <ProfileBox />
            <ProfileBox />
            <ProfileBox />
          </div>
        </div>

        <div className="right-bottom">
          <div className="right-menu">
            <span className="text-size gray">회원님을 위한 추천</span>
            <span className="text-size blue">모두보기</span>
          </div>
          <div className="profiles-wrap-2">
            <ProfileBox />
            <ProfileBox />
            <ProfileBox />
            <ProfileBox />
            <ProfileBox />
          </div>
        </div>
      </div>

      <div className="right-footer">
        <p className="right-footer-text">
          Westargram
          정보.지원.홍보센터.API.채용정보.개인정보처리방침.약관.디렉터리.프로필.해시태그.언어
        </p>
        <p className="right-footer-text">©2023 WESTARGRAM</p>
      </div>
    </div>
  );
}

export default Bodyright;
