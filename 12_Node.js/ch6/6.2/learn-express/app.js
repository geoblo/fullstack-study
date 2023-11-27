const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// dotenv: 환경변수(시스템에 따른 설정값이나 비밀키 등) 관리
// 별도의 파일로 관리하는 이유는 보안과 설정의 편의성 때문
// 1차 보안: 소스코드가 털리면 코드 안에 적어둔 비밀키나 서명 등이 같이 유출됨(하드코딩 지양)
// 2차 보안: .env는 github이나 드라이브(클라우드)에 올리지 않음
dotenv.config(); // 주로 맨 위에 작성(그래야 밑에서 쓸 수 있으니까)

const app = express();
app.set('port', process.env.PORT || 3000);

// morgan: 요청과 응답을 기록하는 미들웨어
// 클라이언트에서 어떤 요청이 왔는지 서버에서 어떻게 응답했는지 정보가 서버에 기록됨
// GET / 200 9.903 ms - 272
// GET요청 /주소(경로) 응답코드 응답에걸린시간 응답길이(바이트)
app.use(morgan('dev')); // 개발 시 사용
// app.use(morgan('combined')); // 배포 시 사용 - ip주소, 날짜/시간, 브라우저 정보 등 더 자세히 기록됨

// cookie-parser: 쿠키 관련 조작들이 편해짐
// app.use(cookieParser([비밀키]));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.get('/', (req, res) => {
  // 쿠키 사용하기
  // 이전 방식: 임의로 만든 parseCookies() 함수를 사용해서 객체로 변환
  console.log(req.cookies); // 쿠키 문자열이 { mycookie: 'test' } 객체 형태로 알아서 파싱이 되어있음

  // 쿠키 설정하기
  // 이전 방식: 'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
  // 위 문자열 쓴 것을 메서드로 쉽게 사용
  // res.cookie(키, 값, [옵션]);
  res.cookie('name', 'goni.kim', {
    expires: new Date(Date.now() + 5 * 60 * 1000), // 5분 뒤
    httpOnly: true,
    path: '/',
    signed: true, // 서명(암호화) 옵션: 쿠키 뒤에 서명이 붙음
    // secure: true, // HTTPS일 경우에만 쿠키가 전송됨
  });

  // 쿠키 지우기
  // res.clearCookie(키, [옵션])
  // res.clearCookie('name');
  // res.clearCookie('name', {
  //   httpOnly: true,
  //   path: '/',
  //   signed: true,
  // });


  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(app.get('port') + '번에서 익스프레스 서버 실행');
});