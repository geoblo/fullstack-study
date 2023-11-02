import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedProduct, selectSelectedProduct } from '../features/product/productSlice';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; }
`;
const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail(props) {
  // URL 파라미터 가져오기
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);

  const [showInfo, setShowInfo] = useState(true); // Info Alert창 상태
  const [orderCount, setOrderCount] = useState(1); // 주문수량 상태

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/geoblo/db-shop/products/${productId}`);
        dispatch(getSelectedProduct(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductById();
  }, []);

  useEffect(() => {
    // Info 띄우고 3초 뒤에 사라지게 만들기
    const timeout = setTimeout(() => {
      setShowInfo(false);
    }, 3000);

    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleChangeOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사
    if (isNaN(e.target.value)) {
      toast.error('💯숫자만 입력하세요!');
      return;
    }
    setOrderCount(Number(e.target.value));
  };

  // 없는 상품일 때 예외 처리
  if (!product) {
    return null; // 아무것도 렌더링하지 않음
  }

  return (
    <Container className='pt-3'>
      {/* Quiz: Alert을 띄우고 3초 뒤에 사라지게 만들기
        (힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정) */}
      {showInfo && 
        <StyledAlert variant="info" onClose={() => setShowInfo(false)} dismissible>
          현재 34명이 이 상품을 보고 있습니다.
        </StyledAlert>
      }

      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>

          <Col md={4} className='m-auto mb-3'>
            <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>

          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;