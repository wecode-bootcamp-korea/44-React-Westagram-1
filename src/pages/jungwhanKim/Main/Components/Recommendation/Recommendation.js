import React from 'react';
import './Recommendation.scss';

const Recommendation = ({ imageUrl, recommendId, recommendSubtext }) => {
  return (
    <div className="recommend">
      <div className="wrapper">
        <div className="align-center">
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            className="recommend-pic"
          />
          <div className="name-wrapper">
            <div className="account-id">{recommendId}</div>
            <div className="account-subtext">{recommendSubtext}</div>
          </div>
        </div>
        <div className="follow-text">팔로우</div>
      </div>
    </div>
  );
};

export default Recommendation;
