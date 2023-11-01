import React from 'react';
import { Col } from 'react-bootstrap';

function ProductListItem(props) {
  // const { product: { title, price, imagePath } } = props;
  const { product } = props;
  const { title, price, imagePath } = product;

  return (
    <Col md={4}>
      <img src={imagePath} width="80%" />
      <h4>{title}</h4>
      <p>{price}원</p>
    </Col>
  );
}

export default ProductListItem;