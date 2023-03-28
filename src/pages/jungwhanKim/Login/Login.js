import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // useState hook으로 인풋창들의 상태와 변경용 훅 정의
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  // 분해 구조 할당으로 각 인풋값 추출
  const { username, password } = inputs;

  // useNavigate 훅 변수 선언
  const navigate = useNavigate();

  // 인풋창에 input 이벤트 발생 시 호출되는 함수
  const saveUserId = event => {
    // 이벤트 타겟 인풋에서의 값과 해당 인풋의 이름을 추출
    const { value, name } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkBothInputs = (isUserNameOkay, isPasswordOkay) => {
    if (isUserNameOkay && isPasswordOkay) {
      navigate('/main-jk');
    }
  };

  const checkUsername = username => {
    if (username.match(/^\S+@\S+\.\S+$/)) {
      return true;
    } else {
      alert('올바른 이메일을 입력해주세요!');
      return false;
    }
  };

  const checkPassword = password => {
    if (password.length > 5) {
      return true;
    } else {
      alert('비밀번호를 6자 이상 입력해주세요!');
      return false;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    checkBothInputs(checkUsername(username), checkPassword(password));
  };

  return (
    <div className="page-container">
      <div className="page-content-wrapper">
        <span>
          <div className="login-wrapper">
            <div className="logo-wrapper">
              <div className="wecode-logo" />
            </div>
            <div className="text-logo">westagram</div>
          </div>
          <div className="input-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                name="username"
                id="idInput"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onInput={saveUserId}
              />
              <input
                name="password"
                id="pwInput"
                type="password"
                placeholder="비밀번호"
                onInput={saveUserId}
              />
              {/* <!--로그인 버튼 요소--> */}

              <button
                name="login"
                id="login"
                // username or passowrd 값이 없을 시 disabled 클래스 부여
                className={!username || !password ? 'login disabled' : 'login'}
                // username or passowrd 값이 없을 시 disabled attribute 추가
                disabled={!username || !password}
              >
                로그인
              </button>
            </form>
            <div className="link-wrapper">
              <Link to="/" className="find-pw">
                비밀번호를 잊으셨나요?
              </Link>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Login;
