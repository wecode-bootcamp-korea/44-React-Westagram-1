import React from 'react';
import './Box.scss';

const ContentBox = ({ children }) => {
  return (
    <div className="content-box">
      <div className="stories-top">
        <div className="stories-header">스토리</div>
        <div className="stories-see-all">모두 보기</div>
      </div>
      {/* <!--스토리 컴포넌트들 나열된 부분--> */}
      {children}
    </div>
  );
};

export default ContentBox;
