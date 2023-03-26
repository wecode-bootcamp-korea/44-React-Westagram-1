/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Img from '../../../assets/sunyoungChoi/mountain.jpg';
import './ProfileBox.scss';

function ProfileBox() {
  return (
    <div className="profilebox">
      <img className="user-img" alt="user image" src={Img} />
      <div className="text-box">
        <p className="profile-name">hellow_world</p>
        <p className="profile-text">집으로 가는길</p>
      </div>
    </div>
  );
}

export default ProfileBox;
