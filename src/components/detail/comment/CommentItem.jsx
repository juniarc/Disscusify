import React from 'react';
import PropTypes from 'prop-types';
import VoteBtns from '../../buttons/VoteBtns';
import { postedAt } from '../../../utils/dateHelper';

import '../../../styles/components/CommentItem.css';

function CommentItem({
  id,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
  content,
  owner,
  authUser,
  t,
}) {
  const formatedDate = postedAt(createdAt, t);
  return (
    <div className="comment-item">
      <div className="comment-item__header">
        <div className="comment-item__header__left">
          <div className="comment-item__header__left__img-container">
            <img
              src={owner.avatar}
              alt={owner.name}
              className="comment-item__header__img"
            />
          </div>
          <p className="comment-item__header__left__name">{owner.name}</p>
        </div>
        <p className="comment-item__header__right__date">{formatedDate}</p>
      </div>
      <p className="comment-item__body">{content}</p>
      <div className="comment-item__vote">
        <VoteBtns
          id={id}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neutralVote={neutralVoteComment}
          authUser={authUser.id}
        />
      </div>
    </div>
  );
}

const commentItemShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralVoteComment: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  authUser: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export { commentItemShape };

export default CommentItem;
