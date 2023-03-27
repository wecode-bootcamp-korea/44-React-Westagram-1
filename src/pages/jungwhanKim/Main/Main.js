import React from 'react';
import Box from './Components/Box/Box';
import Links from './Components/Links/Links';
import Navbar from './Components/Navbar/Navbar';
import Post from './Components/Post/Post';
import ProfileSection from './Components/ProfileSection/ProfileSection';
import Recommendation from './Components/Recommendation/Recommendation';
import Story from './Components/Story/Story';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        {/* <!--내비게이션 바--> */}
        <Navbar />
        <div className="column-left">
          {/* <!--포스트 컴포넌트--> */}
          <div>
            <Post />
            <Post />
          </div>
          {/* <!--우측 콜룸--> */}
          <div className="column-right">
            <span>
              <ProfileSection />
              <Box title="스토리">
                <Story
                  storyId="slack"
                  storySubtext="New York City, NY"
                  imageUrl="https://www.techrepublic.com/wp-content/uploads/2016/05/slackmarkweb.png"
                />
                <Story
                  storyId="notion_so_official"
                  storySubtext="노션 공식 페이지"
                  imageUrl="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/icons/notion-app-icon-3d.png"
                />
                <Story
                  storyId="octocat_github"
                  storySubtext="make sure you commit!"
                  imageUrl="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                />
              </Box>
              {/* <!--추천 시작 부분--> */}
              <Box title="팔로우 추천">
                {/* <!--팔로우 추천 컴포넌트들 나열된 부분--> */}
                <Recommendation
                  imageUrl="https://velog.velcdn.com/images/haerong22/post/d8cc6ab6-9b0a-4581-ac68-0fad44a39bbb/image.jpeg"
                  recommendId="velopert"
                  recommendSubtext="I make tutorials!"
                />
                <Recommendation
                  imageUrl="https://yt3.googleusercontent.com/R0wOpi3k0bm70OnRBULpgzqu787ifW6rqn-SjqwhKO8Gl_LQtVS0asyxKuesLDNNJgPfid7z=s900-c-k-c0x00ffffff-no-rj"
                  recommendId="storybook.js"
                  recommendSubtext="build bulletproof UI components!"
                />
                <Recommendation
                  imageUrl="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png"
                  recommendId="figma.design"
                  recommendSubtext="we run the UI design industry"
                />
              </Box>
              <Links />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
