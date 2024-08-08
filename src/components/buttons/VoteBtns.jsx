import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown,
} from 'react-icons/fa';

import '../../styles/components/VoteBtns.css';

function VoteBtns({
  id,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralVote,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();

    if (isUpVoted) {
      neutralVote(id);
    } else {
      if (isDownVoted) {
        neutralVote(id);
      }
      upVote(id);
    }
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    if (isDownVoted) {
      neutralVote(id);
    } else {
      if (isUpVoted) {
        neutralVote(id);
      }
      downVote(id);
    }
  };

  return (
    <>
      {upVotesBy && (
        <button className="upVote__btn" onClick={onUpVoteClick} type="button">
          {isUpVoted ? (
            <FaThumbsUp
              className="thumbs-up-icon"
              style={{ color: '#03346E' }}
            />
          ) : (
            <FaRegThumbsUp className="thumbs-up-icon" />
          )}
          <p className="upVote">{upVotesBy.length}</p>
        </button>
      )}
      {downVotesBy && (
        <button
          className="downVote__btn"
          onClick={onDownVoteClick}
          type="button"
        >
          {isDownVoted ? (
            <FaThumbsDown
              className="thumbs-down-cion"
              style={{ color: '#EF5A6F' }}
            />
          ) : (
            <FaRegThumbsDown className="thumbs-down-cion" />
          )}
          <p className="downVote__number">{downVotesBy.length}</p>
        </button>
      )}
    </>
  );
}

VoteBtns.propTypes = {
  id: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export default VoteBtns;
