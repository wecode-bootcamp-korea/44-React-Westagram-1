import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Navbar.scss';

const Navbar = ({}) => {
  // 검색창에서 검색 가능한 값들과 그 배열용 훅 정의
  const userList = [
    ['georgekim', '../../../assets/jungwhanKim/blue_check.png'],
    ['georgekim_official', '../../../assets/jungwhanKim/profile_dark.jpg'],
    ['google_korea', '../../../assets/jungwhanKim/google.jpeg'],
    ['general_assembly_official', '../../../assets/jungwhanKim/GA.png'],
    ['notion_so_official', '../../../assets/jungwhanKim/notion.jpeg'],
    ['slack_official', '../../../assets/jungwhanKim/slack_hash_256.png'],
    ['wecode', '../../../assets/jungwhanKim/wecode-logo.png'],
    ['wecode_korea', '../../../assets/jungwhanKim/wecode_trans.jpeg'],
    ['wecode_united_states', '../../../assets/jungwhanKim/cowork.jpeg'],
  ];
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
      userList.map(user => {
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
            {matchingUsers.length > 0 ? (
              matchingUsers.map((item, i) => (
                <div key={i} className="search-result">
                  <div
                    style={{ backgroundImage: `url(${item[1]})` }}
                    className="result-img"
                  />
                  <div className="result-id">{item[0]}</div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* <!--우측 메뉴들--> */}
        <div className="align-center">
          <div className="explore" />
          <div className="heart" />
          <div onClick={handleOpenModal} className="my" />

          {/* <!--프로필이 클릭되면 열리는 모달--> */}
          {modalOpen ? <Modal handleCloseModal={handleCloseModal} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
