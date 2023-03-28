import React from 'react';
import {
  IoLogoInstagram,
  IoNavigateCircleOutline,
  IoHeartOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav-wrap">
      <nav>
        <div className="logo-box">
          <IoLogoInstagram className="logo-icon" />
          <p className="logo">Westargram</p>
        </div>
        <div className="search-box">
          <input className="search-input" type="text" placeholder="검색" />
          <i className="fa-sharp fa-solid fa-magnifying-glass" />
        </div>
        <div className="inner-Menu">
          <IoNavigateCircleOutline className="nav-icon" />
          <IoHeartOutline className="nav-icon" />
          <IoPersonOutline className="nav-icon" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
