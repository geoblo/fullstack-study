export default function List() {
  // DB에서 가져온 데이터라고 가정
  const products = ['Apple', 'Orange', 'Melon'];

  return (
    <>
      <h4 className="title">상품 목록</h4>
      {/* <div className="fruits">
        <h4>{products[0]}</h4>
      </div>
      <div className="fruits">
        <h4>{products[1]}</h4>
      </div>
      <div className="fruits">
        <h4>{products[2]}</h4>
      </div> */}

      {/* Quiz: 상품 목록 반복 렌더링 */}
      {products.map((product, index) => {
        return (
          <div key={index} className="fruits">
            {/* 이미지 넣기(1) - img 태그 */}
            

            <h4>{product}</h4>
          </div>
        );
      })}
    </>
  );
}