import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { FaRegHeart, FaRegCompass } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
  // 검색값과 사용자 아이디가 일치할 시 푸쉬할 빈 배열
  let matchingUsersList = [];

  // 검색한 값이 userList 값과 겹칠 시 사용할 상태값과 변경 훅 정의
  const [matchingUsers, setMatchingUsers] = useState([]);

  // 상단 검색창의 상태값 및 변경용 축 정의
  const [searchInput, setSearchInput] = useState('');

  // 프로필 모달의 상태 및 변경용 훅 정의
  const [modalOpen, setModalOpen] = useState(false);

  // 상단 검색창에 값이 입력될 시 호출
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    // 검색창에 인풋 값이 있고 값이 사용자 아이디와 겹치는 부분이 있다면
    if (searchInput !== '' || searchInput !== null) {
      USER_LIST.map(user => {
        if (user[0].indexOf(event.target.value) !== -1) {
          // setSearchInput(event.target.value);
          matchingUsersList.push(user);
          setMatchingUsers(matchingUsersList);
        }
      });
      setMatchingUsers(matchingUsersList);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        {/* <!--로고--> */}
        <div className="align-center">
          <div className="wecode-logo" />
          <div className="text-logo">westagram</div>
        </div>
        {/* <!--검색창--> */}
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="검색"
            value={searchInput}
            onChange={handleSearchInput}
          />
          {/* <!--검색창 입력을 시작할 시 보일 검색 결과--> */}
          <div
            className="results"
            style={{ display: searchInput ? 'block' : 'none' }}
          >
            {matchingUsers.length > 0
              ? matchingUsers.map((item, i) => (
                  <div key={i} className="search-result">
                    <div
                      style={{ backgroundImage: `url(${item[1]})` }}
                      className="result-img"
                    />
                    <div className="result-id">{item[0]}</div>
                  </div>
                ))
              : null}
          </div>
        </div>

        {/* <!--우측 메뉴들--> */}
        <div className="align-center">
          <FaRegCompass className="explore" />
          <FaRegHeart className="heart" />
          <div
            onClick={handleOpenModal}
            className={modalOpen ? 'my active' : 'my'}
          />

          {/* <!--프로필이 클릭되면 열리는 모달--> */}
          {modalOpen ? <Modal handleCloseModal={handleCloseModal} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const USER_LIST = [
  ['georgekim', '/images/jungwhanKim/profile_dark.jpg'],
  [
    'general.electronics',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1200px-General_Electric_logo.svg.png',
  ],
  ['google_korea', '/images/jungwhanKim/google.jpeg'],
  ['general_assembly_official', '/images/jungwhanKim/GA.png'],
  [
    'notion_so_official',
    'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
  ],
  [
    'slack_official',
    'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
  ],
  [
    'storybook.js',
    'https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png',
  ],
  ['wecode', '/images/jungwhanKim/wecode-logo.png'],
  [
    'wecode.wenito',
    'https://miro.medium.com/v2/resize:fit:399/0*DeilneOMUXvpBx9j',
  ],
  [
    'wework',
    'https://pbs.twimg.com/profile_images/1544432978033532936/l0ZFWJqc_400x400.jpg',
  ],
  [
    'kleinerperkins',
    'https://i.pinimg.com/originals/48/de/8e/48de8e20599d0d9890a372a95a6fc6d7.png',
  ],
];
