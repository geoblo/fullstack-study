import Comment from "./Comment";

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default CommentList;