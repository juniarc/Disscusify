/* eslint-disable react-refresh/only-export-components */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from 'html-react-parser';
import VoteBtns from '../buttons/VoteBtns';
import CommentsBtn from '../buttons/CommentsBtn';
import { postedAt } from '../../utils/dateHelper';

import '../../styles/components/ThreadItem.css';

function ThreadItem({
  id,
  title,
  category,
  body,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neutralVote,
  authUser,
  user,
  t,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const formatedDate = postedAt(createdAt, t);

  return (
    <div className="thread-item">
      <p className="thread-item__title" onClick={onThreadClick}>
        {title}
      </p>
      <div className="thread-item__info">
        <div className="thread-item__left">
          <div className="thread-item__left__img-container">
            <img
              className="thread-item__left__img-user"
              src={user.avatar}
              alt={user.name}
            />
          </div>
          <div className="thread-item__left__text-container">
            <p className="thread-item__left__name">{user.name}</p>
            <p className="thread-item__left__date">{formatedDate}</p>
          </div>
        </div>
        <div className="thread-item__right">
          <p className="thread-item__category">{category}</p>
        </div>
      </div>
      <p className="thread-item__body">{parse(body)}</p>
      <div className="thread-item__bottom">
        <VoteBtns
          id={id}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          upVote={upVote}
          downVote={downVote}
          authUser={authUser}
          neutralVote={neutralVote}
        />
        <CommentsBtn id={id} totalComments={totalComments} />
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export { threadItemShape };

export default ThreadItem;
