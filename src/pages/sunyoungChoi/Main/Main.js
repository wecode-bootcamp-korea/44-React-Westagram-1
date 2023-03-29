/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import Bodymain from './Body/Bodymain';
import Bodyright from './Body/Bodyright';
// import CommentBox from './Comment/CommentBox';
import './Main.scss';

function Main() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/sunyoungChoi/Feed.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeedData(data));
  }, []);

  return (
    <div className="main">
      <Nav />
      <div className="main-box">
        <div className="main-wrap">
          {feedData.map(feed => {
            return <Bodymain key={feed.feedId} feedData={feed} />;
          })}
        </div>
        <Bodyright />
      </div>
    </div>
  );
}

export default Main;
