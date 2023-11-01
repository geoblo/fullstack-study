import React from 'react';

function ProductListItem(props) {
  return (
    <Col md={4}>
      <img src='https://www.yonexmall.com/shop/data/goods/1645767865278s0.png' width="80%" />
      <h4>상품명</h4>
      <p>상품가격</p>
    </Col>
  );
}

export default ProductListItem;