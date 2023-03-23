import React from 'react';
// import { useNavigate } from "react-router-dom";
import Nav from './Nav';
import Body from './Bodymain';
import Bodyright from './Bodyright';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Nav />
      <div className="mainWrap">
        <Body />
        <Bodyright />
      </div>
    </div>
  );
}

export default Main;
