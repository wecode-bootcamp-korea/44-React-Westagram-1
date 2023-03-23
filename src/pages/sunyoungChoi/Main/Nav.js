import React from 'react';

function Logobox() {
  return (
    <div className="logo-box">
      <i className="fa-brands fa-instagram" />
      <p className="logo">Westargram</p>
    </div>
  );
}

function Searchbox() {
  return (
    <div className="search-box">
      <input className="search-input" type="text" placeholder="검색" />
      <i className="fa-sharp fa-solid fa-magnifying-glass" />
    </div>
  );
}

function Innermenu() {
  return (
    <div className="innerMenu">
      <img src="../../assets/sunyoungChoi/explore.png" alt="explore icon" />
      <img src="../../assets/sunyoungChoi/heart.png" alt="heart icon" />
      <img src="../../assets/sunyoungChoi/profile.png" alt="profile icon" />
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <nav>
        <Logobox />
        <Searchbox />
        <Innermenu />
      </nav>
    </div>
  );
}

export default Nav;
