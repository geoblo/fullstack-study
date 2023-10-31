import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플 데이터 렌더링 해보기
const sampleArticle = {
  title: '제목',
  description: '내용', 
  url: 'https://google.com', 
  urlToImage: 'https://via.placeholder.com/160'
};

// API를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 컴포넌트 배열로 변환하여 렌더링하는 컴포넌트
function NewsList(props) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩을 상태로 관리하여 API 요청이 대기 중인지 판별

  // NewsList가 화면에 보이는 시점에 API를 요청
  // => useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 한번만 요청
  useEffect(() => {
    // async 함수 선언
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ceb8d915e94f45079475365770e158c2');

        console.log(response);
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchNewsData();
  }, []);

  // 로딩 중일 때
  // 추천: react-spinners 또는 Lottie File 사용
  if (loading) {
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }

  // articles 값이 없을 때 렌더링 막기
  // if (!articles) {
  //   return null;
  // }

  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}

      {/* map() 함수로 반복 렌더링하기 + 데이터 연동하기 */}
      {articles?.map(article => <NewsItem key={article.url} article={article} />)}
    </NewsListBlock>
  );
}

export default NewsList;