import React from 'react';
import styled from 'styled-components';

// 리액트(JS)에서 이미지 파일 가져오기
import yonexImg from "../images/yonex.jpg";
import { Col, Container, Row } from 'react-bootstrap';

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
        {/* <img src={yonexImg} /> */}
      </section>

      {/* 상품 목록 레이아웃 섹션 */}
      <section>
        <Container>
          <Row>
            {/* 부트스트랩을 이용한 반응형 작업 */}
            {/* md ≥768px 이상에서 전체 12등분 중 4:4:4로 보여줌 */}
            <Col md={4}>
              <img src='https://www.yonexmall.com/shop/data/goods/1645767865278s0.png' width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src='https://www.yonexmall.com/shop/data/goods/1645767865278s0.png' width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src='https://www.yonexmall.com/shop/data/goods/1645767865278s0.png' width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;