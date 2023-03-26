import React from 'react';
import Explor from '../../../assets/sunyoungChoi/explore.png';
import Heart from '../../../assets/sunyoungChoi/heart.png';
import Glass from '../../../assets/sunyoungChoi/profile.png';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav-wrap">
      <nav>
        <div className="logo-box">
          <i className="fa-brands fa-instagram" />
          <p className="logo">Westargram</p>
        </div>
        <div className="search-box">
          <input className="search-input" type="text" placeholder="검색" />
          <i className="fa-sharp fa-solid fa-magnifying-glass" />
        </div>
        <div className="inner-Menu">
          <img className="menu-icon" src={Explor} alt="explore icon" />
          <img className="menu-icon" src={Heart} alt="heart icon" />
          <img className="menu-icon" src={Glass} alt="profile icon" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
