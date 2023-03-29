import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  let [userIdValue, setIdInput] = useState('');
  let [userPwValue, setPwInput] = useState('');
  let [act, setAct] = useState(false);

  const navigate = useNavigate();

  const handleId = e => {
    setIdInput(e.target.value);
    actPassedLogin();
  };

  const handlePw = e => {
    setPwInput(e.target.value);
    actPassedLogin();
  };

  const goToMain = () => {
    navigate('/Main');
  };

  const actPassedLogin = () => {
    userIdValue.includes('@') && userPwValue.length >= 5
      ? setAct(true)
      : setAct(false);
  };

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-logo">Westagram</div>
        <div className="login-contents">
          <input
            onChange={handleId}
            id="user-id"
            className="input"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePw}
            id="user-pw"
            className="input"
            type="password"
            placeholder="비밀번호"
          />
          <button
            type="button"
            className={act ? 'passed-login' : 'failed-login'}
            onClick={goToMain}
            disabled={act ? true : false}
          >
            로그인
          </button>
        </div>

        <div className="find-pw">
          {/* <a href="" target="_blank" title="비밀번호 찾기">비밀번호를 잊으셨나요?</a> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
