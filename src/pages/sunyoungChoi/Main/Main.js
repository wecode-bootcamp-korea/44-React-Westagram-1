import React from 'react';
import Nav from './Nav';
import Body from './Bodymain';
import Bodyright from './Bodyright';
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
