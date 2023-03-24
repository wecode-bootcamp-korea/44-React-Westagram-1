import React, { useState } from 'react';
import Comment from './Components/Comment/Comment';
import Modal from './Components/Modal/Modal';
import './Main.scss';
// import '../../../assets/jungwhanKim/';

const Main = () => {
  // 검색창에거 검색 가능한 값들과 그 배열용 훅 정의

  // '../../../assets/jungwhanKim/profile_hat.jpg'
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

  // 댓글 섹션에 맵핑할 댓글 배열 선언
  const [comments, setComments] = useState([]);

  // 포스트 댓글 게시 인풋창 상태값 및 변경용 훅 정의
  const [commentInput, setCommentInput] = useState('');

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

  // 댓글 게시 인풋창 상태값 변경시 호출
  const handleComment = event => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (commentInput === '') {
      alert('게시 전 내용을 입력해주세요!');
      return;
    }

    setComments([...comments, commentInput]);
    // comments.push(commentInput);
    setCommentInput('');
  };

  const handleRemove = id => {
    // newComments라는 comments의 상태값을 복사한 배열을 생성, 이후 매핑하여 클릭했던 아이템의 key와 index값이 일치하지 않은 아이템들만 filter하여 새로운 배열에 생성; 이후 배열을 새 상태값으로 지정
    const newComments = comments.filter((item, i) => id !== i);
    setComments(newComments);
  };

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="main">
      <div className="container">
        {/* <!--내비게이션 바--> */}
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
                className="searchInput"
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
                    <div key={i} className="search-result-wrapper">
                      <div
                        style={{ backgroundImage: `url(${item[1]})` }}
                        className="search-result-img"
                      />
                      <div className="search-result-id">{item[0]}</div>
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

        <div className="feed-container">
          {/* <!--좌측 콜룸--> */}
          <div className="feeds-column">
            <div className="feeds">
              {/* <!--포스트 컴포넌트--> */}
              <div className="article">
                {/* <!--포스트 첫번째 로우--> */}
                <div className="article-top">
                  <div className="align-center">
                    <div className="account-pic" />
                    <div className="account-name">
                      <div className="align-center">
                        <div className="account-name-main">wecode_bootcamp</div>
                        <div className="blue-check" />
                      </div>
                      <div className="account-name-sub">위워크 선릉 2호점</div>
                    </div>
                  </div>
                  <div className="article-menu" />
                </div>
                {/* <!--포스트 사진--> */}
                <div className="post-img" />
                {/* <!--3번째 로우/하트, 공유 기능들--> */}
                <div className="third-row">
                  <div className="align-center">
                    <div className="like-clicked" />
                    <div className="comment-img" />
                    <div className="share-img" />
                  </div>
                  <div className="save-img" />
                </div>
                {/* <!--4번째 로우/포스트 라이크 상태--> */}
                <div className="align-center">
                  <div className="account-pic-sm" />
                  <div className="post-status-msg">
                    <span className="bolded">wecode_bootcamp</span>님{' '}
                    <span className="bolded">외 124명</span>이 좋아합니다
                  </div>
                </div>
                {/* dummy comment below */}
                <div className="dummy-comment">
                  <div className="align-center">
                    <div className="comment-id">wecode_bootcamp</div>
                    <div className="align-center">
                      <div>🌊🚢 44기는 오늘도 순항 중입니다! 🙌🙌🙌 ...</div>
                      <div className="see-more">더 보기</div>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  {/* <!--Comment components will be mapped below--> */}
                  {comments.map((comment, i) => (
                    <Comment
                      key={i}
                      content={comments[i]}
                      handleRemove={() => handleRemove(i)}
                    />
                  ))}
                </div>
                <div className="time-posted">54분 전</div>
                <div className="comment-input">
                  {/* <!--댓글 입력창--> */}
                  <form onSubmit={handleSubmit}>
                    <input
                      name="comment"
                      type="text"
                      placeholder="댓글 달기..."
                      onInput={handleComment}
                      value={commentInput}
                    />
                    {/* <!--게시 버튼--> */}
                    <button className="add-button">게시</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!--우측 콜룸--> */}
          <div className="main-right">
            <div className="top-right-profile">
              <div className="right-account-pic" />
              <div className="account-name">
                <div className="account-name-main">_georgekim</div>
                <div className="account-name-sub">44기 김정환</div>
              </div>
            </div>
            {/* <!--스토리 시작 부분--> */}
            <div className="box">
              <div className="stories-top">
                <div className="stories-header">스토리</div>
                <div className="stories-see-all">모두 보기</div>
              </div>
              {/* <!--스토리 컴포넌트들 나열된 부분--> */}
              <div className="story-component">
                <div className="align-center">
                  <div className="gradient">
                    <div className="account-pic-story" />
                  </div>
                  <div className="account-name">
                    <div className="account-name-main">위코드 수강생</div>
                    <div className="account-name-sub">위코드 본사(위워크)</div>
                  </div>
                </div>
              </div>
              <div className="story-component">
                <div className="align-center">
                  <div className="gradient">
                    <div className="account-pic-story" />
                  </div>
                  <div className="account-name">
                    <div className="account-name-main">위코드 수강생</div>
                    <div className="account-name-sub">위코드 본사(위워크)</div>
                  </div>
                </div>
              </div>
              <div className="story-component">
                <div className="align-center">
                  <div className="gradient">
                    <div className="account-pic-story" />
                  </div>
                  <div className="account-name">
                    <div className="account-name-main">위코드 수강생</div>
                    <div className="account-name-sub">위코드 본사(위워크)</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--추천 시작 부분--> */}
            <div className="box">
              <div className="stories-top">
                <div className="stories-header">회원님을 위한 추천</div>
                <div className="stories-see-all">모두 보기</div>
              </div>
              {/* <!--팔로우 추천 컴포넌트들 나열된 부분--> */}
              <div className="recommend-component">
                <div className="recomment-wrapper">
                  <div className="align-center">
                    <div className="account-pic" />
                    <div className="account-name">
                      <div className="account-name-main">위코드 수강생</div>
                      <div className="account-name-sub">
                        회원님을 팔로우합니다
                      </div>
                    </div>
                  </div>
                  <div className="follow-text">팔로우</div>
                </div>
              </div>
              <div className="recommend-component">
                <div className="recomment-wrapper">
                  <div className="align-center">
                    <div className="account-pic" />
                    <div className="account-name">
                      <div className="account-name-main">위코드 수강생</div>
                      <div className="account-name-sub">
                        회원님을 팔로우합니다
                      </div>
                    </div>
                  </div>
                  <div className="follow-text">팔로우</div>
                </div>
              </div>
              <div className="recommend-component">
                <div className="recomment-wrapper">
                  <div className="align-center">
                    <div className="account-pic" />
                    <div className="account-name">
                      <div className="account-name-main">위코드 수강생</div>
                      <div className="account-name-sub">
                        회원님을 팔로우합니다
                      </div>
                    </div>
                  </div>
                  <div className="follow-text">팔로우</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
