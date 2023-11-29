const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('게시판 메인 화면');
});
// router.get('/sub/notice', (req, res) => {
//   res.send('공지사항 게시판');
// });
// router.get('/sub/qna', (req, res) => {
//   res.send('문의 게시판');
// });

router.get('/sub/:category', (req, res) => {
  res.send(`${req.params.category} 게시판`);
});

module.exports = router;