/* eslint-disable react/destructuring-assignment */

import CloseButton from './CloseButton';
import './CommentItem.scss';

//8. 자식영역 컴포넌트 생성

//삭제기능: 버튼에 true값을 디폴트 값으로 주고, 클릭을 했을 때 삭제 되게
const CommentItem = props => {
  return (
    <div className="comment-item">
      <div className="comment-wrap">
        <div className="comment-id">User Id :</div>
        <div className="comment-text">{props.item}</div>
        <CloseButton />
      </div>
    </div>
  );
};

export default CommentItem;
