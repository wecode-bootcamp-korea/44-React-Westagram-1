import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // useState hook으로 인풋창들의 상태와 변경용 훅 정의
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  // 아이디와 비밀번호값 모두 충족 시 버튼 오케이 "참" 상태로 변경
  const [buttonOkay, setButtonOkay] = useState(false);

  // 분해 구조 할당으로 각 인풋값 추출
  const { username, password } = inputs;

  // useNavigate 훅 변수 선언
  const navigate = useNavigate();

  // 인풋창에 input 이벤트 발생 시 호출되는 함수
  const onChange = event => {
    // 이벤트 타겟 인풋에서의 값과 해당 인풋의 이름을 추출
    const { value, name } = event.target;
    // console.log(value, name);

    if (inputs.username && inputs.password) {
      console.log(inputs.username);
      console.log(inputs.password);
    } else if (inputs.username.length || inputs.password.length <= 0) {
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkBothInputs = (isUserNameOkay, isPasswordOkay) => {
    console.log('CHECKING BOTH INPUTS');
    if (isUserNameOkay && isPasswordOkay) {
      navigate('/main-jk');
    } else {
      console.log('somthing WRONG');
      setButtonOkay(false);
    }
  };

  const checkUsername = username => {
    console.log('checking username.....');
    if (username.match(/^\S+@\S+\.\S+$/)) {
      return true;
    } else {
      alert('올바른 이메일을 입력해주세요!');
      return false;
    }
  };

  const checkPassword = password => {
    console.log('checking user password.....');
    if (password.length > 5) {
      return true;
    } else {
      alert('비밀번호를 6자 이상 입력해주세요!');
      return false;
    }
  };

  // const onReset = () => {
  //   setInputs({
  //     username: '',
  //     password: '',
  //   });
  // };

  // form이 submit될 때 호출할 preventdefault용 함수
  const handleSubmit = event => event.preventDefault();

  return (
    <div className="page-container">
      <div>
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
              onInput={onChange}
            />
            <input
              name="password"
              id="pwInput"
              type="password"
              placeholder="비밀번호"
              onInput={onChange}
            />
            {/* <!--로그인 버튼 요소--> */}

            <button
              name="login"
              id="login"
              // username or passowrd 값이 없을 시 disabled 클래스 부여
              className={!username || !password ? 'login disabled' : 'login'}
              // username or passowrd 값이 없을 시 disabled attribute 추가
              disabled={!username || !password}
              onClick={() =>
                checkBothInputs(
                  checkUsername(username),
                  checkPassword(password)
                )
              }
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
      </div>
    </div>
  );
};

export default Login;
