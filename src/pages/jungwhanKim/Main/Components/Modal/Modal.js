import React from 'react';
import './Modal.scss';

const Modal = ({ handleCloseModal }) => {
  return (
    <>
      <div onClick={handleCloseModal} className="modal-overlay" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-first-section">
            <div className="modal-row">
              <div className="modal-icon-profile" />
              <div className="modal-text">프로필</div>
            </div>
            <div className="modal-row">
              <div className="modal-icon-saved" />
              <div className="modal-text">저장됨</div>
            </div>
            <div className="modal-row">
              <div className="modal-icon-settings" />
              <div className="modal-text">설정</div>
            </div>
          </div>
          <div className="modal-second-section">
            <div className="modal-text">로그아웃</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
