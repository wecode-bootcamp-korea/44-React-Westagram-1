import React from 'react';
import './ProfileSection.scss';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-image" />
      <div className="profile-text">
        <div className="profile-info">
          <div className="profile-name">_georgekim</div>
          <div className="profile-subtext">44기 김정환</div>
        </div>
        <div className="switch">변경</div>
      </div>
    </div>
  );
};

export default ProfileSection;
