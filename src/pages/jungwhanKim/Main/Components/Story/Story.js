import React from 'react';
import './Story.scss';

const Story = ({ storyId, storySubtext, imageUrl }) => {
  return (
    <div className="story">
      <div className="align-center">
        <div className="gradient">
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            className="account-image"
          />
        </div>
        <div className="name-wrapper">
          <div className="account-id">{storyId}</div>
          <div className="account-subtext">{storySubtext}</div>
        </div>
      </div>
    </div>
  );
};

export default Story;
