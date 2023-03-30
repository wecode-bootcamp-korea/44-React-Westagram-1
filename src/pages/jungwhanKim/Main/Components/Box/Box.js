import React from 'react';
import './Box.scss';

const ContentBox = ({ children, title }) => {
  return (
    <div className="content-box">
      <div className="box-header">
        <div className="header-text">{title}</div>
        <div className="header-more">모두 보기</div>
      </div>
      {/* <!--스토리 컴포넌트들 나열된 부분--> */}
      {children}
    </div>
  );
};

export default ContentBox;
