import React, { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

// const [loginpass, loginblock] = useState(false);

const Login = () => {
  const navigate = useNavigate();

  //   if (
  //     userId.value.length > 0 &&
  //     userId.value.indexOf('@') !== -1 &&
  //     userId.value.length >= 5
  //   )
  const goToMain = () => {
    if (
      useId.includes('@') &&
      userIdValue.length < 0 &&
      userPwValue.length >= 5
    ) {
      navigate('/Main');
    } else {
      alert('아이디와 비빌번호를 다시 한번 확인해주세요');
    }
  };

  let [act, setAct] = useState(false);

  let [userIdValue, setIdInput] = useState('');
  let [userPwValue, setPwInput] = useState('');
  // console.log(userIdValue);
  // console.log(userPwValue);

  const actPassedLogin = () => {
    return userIdValue.includes('@') &&
      userPwValue.length >= 5 &&
      userPwValue.length > 0
      ? setAct(true)
      : setAct(false);
  };

  const handleId = e => {
    setIdInput(e.target.value);
  };

  const handlePw = e => {
    setPwInput(e.target.value);
  };

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-logo">Westagram</div>
        <div className="login-contents">
          <input
            onChange={handleId}
            onKeyUp={actPassedLogin}
            id="user-id"
            className="input"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePw}
            onKeyUp={actPassedLogin}
            id="user-pw"
            className="input"
            type="password"
            placeholder="비밀번호"
          />
          <button
            type="button"
            className={act ? 'passed-login' : 'failed-login'}
            onClick={goToMain}
            disabled={userIdValue === '' || userPwValue === '' ? true : false}
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
