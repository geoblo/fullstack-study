export default function List() {
  // DB에서 가져온 데이터라고 가정
  const products = ['Apple', 'Orange', 'Grape'];

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
            {/* img 태그에 그냥 절대 경로로 적어주면 public 폴더에서 찾음 */}
            <img src={`/fruits${index}.png`} alt="fruits" className="fruits-img" />

            {/* 이미지 넣기(2) - Image 컴포넌트 */}
            {/* 
              이미지는 일반적인 웹 페이지의 무게의 큰 부분을 차지함(즉, 성능에 영향을 미침)
              성능과 속도가 중요하다면 Image 컴포넌트를 통한 이미지 최적화 사용
              1) 사이즈 최적화: 디바이스에 맞는 크기의 이미지를 자동으로 제공
              2) layout shift 방지: 이미지 로딩이 늦어 레이아웃이 밀려나는 현상 방지
              3) 빠른 페이지 로드:
                lazy loading을 사용하여 실제 이미지들이 실제로 화면에 보여질 필요가 있을 때(뷰포트에 들어갈 때만) 로딩
                웹 페이지 내에서 바로 로딩을 하지 않고 로딩 시점을 뒤로 미루는 것

              참고 자료: https://nextjs.org/docs/app/building-your-application/optimizing/images
            */}

            <h4>{product}</h4>
          </div>
        );
      })}
    </>
  );
}