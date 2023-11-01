import styled, { createGlobalStyle } from "styled-components";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center; // 디자인 편하게 하려고 꼼수
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 부트스트랩 연습 */}
      {/* <Button variant="primary">Primary</Button>
      <button type="button" class="btn btn-primary">Primary</button> */}
      
      {/* Quiz: Layout 컴포넌트로 추출 및 Outlet을 활용하여 라우팅 구성해보기 */}
      {/* src/pages/Layout.js */}

      <Routes>
        <Route path="/" element={<Layout />}>
          
          {/* <Route path="cart" element={undefined} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 부트스트랩을 써도 무관
// https://react-bootstrap.netlify.app/

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios