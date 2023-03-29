import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 김정환의 코드
import LoginCode from './pages/jungwhanKim/Login/Login';
import MainCode from './pages/jungwhanKim/Main/Main';
import Upload from './pages/jungwhanKim/Main/Upload';
// 최선영의 코드
import LoginProgram from './pages/sunyoungChoi/Login/Login';
import MainProgram from './pages/sunyoungChoi/Main/Main';
// 박효성의 코드
import LoginSoftware from './pages/hyosungPark/Login/Login';
import MainSoftware from './pages/hyosungPark/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 김정환의 페이지들 */}
        <Route path="/login-jk" element={<LoginCode />} />
        <Route path="/main-jk" element={<MainCode />} />
        <Route path="/upload-jk" element={<Upload />} />
        {/* 최선영의 페이지들 */}
        <Route path="/login-sc" element={<LoginProgram />} />
        <Route path="/main-sc" element={<MainProgram />} />
        {/* 박효성의 페이지들 */}
        <Route path="/login-hp" element={<LoginSoftware />} />
        <Route path="/main-hp" element={<MainSoftware />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
