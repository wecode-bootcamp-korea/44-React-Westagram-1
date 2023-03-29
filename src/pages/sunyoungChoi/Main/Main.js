import React from 'react';
import Nav from './Nav/Nav';
import Body from './Body/Bodymain';
import Bodyright from './Body/Bodyright';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Nav />
      <div className="main-wrap">
        <Body />
        <Bodyright />
      </div>
    </div>
  );
}

export default Main;
