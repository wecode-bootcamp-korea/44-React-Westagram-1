/* eslint-disable react/jsx-key */
import React from 'react';
import ProfileBox from '../ProfileBox';
import { FOOTER } from './FOOTER';
import './Bodyright.scss';

function Bodyright() {
  return (
    <div className="body-right">
      <div className="right-total-wrap">
        <div className="right-main-profile">
          <ProfileBox />
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
        <div className="right-footer">
          <div className="footer-text-box">
            <p className="footer-text"> Westargram </p>
            {FOOTER.map(info => (
              <p className="footer-text" key={info.id}>
                {info.name}
              </p>
            ))}
            <p className="footer-text">©2023 WESTARGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodyright;
