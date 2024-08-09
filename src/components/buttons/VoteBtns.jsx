import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown,
} from 'react-icons/fa';

const Button = styled.button`
    display: flex;
    align-items: center;

    min-width: 24px;
    min-height: 24px;

    color: var(--var-color-black-to-white);

    @media screen and (min-width: 1280px) {
      column-gap: 8px;
      font-size: 1em;
    }
    @media screen and (max-width: 1280px) {
      column-gap: 8px;
      font-size: 1em;
    }
    @media screen and (max-width: 768px) {
      column-gap: 8px;
      font-size: 1em;
    }
  `;

const UpVoteButton = styled(Button)``;
const DownVoteButton = styled(Button)``;

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
        <UpVoteButton className="upVote__btn" onClick={onUpVoteClick} type="button">
          {isUpVoted ? (
            <FaThumbsUp
              className="thumbs-up-icon"
              style={{ color: '#03346E' }}
            />
          ) : (
            <FaRegThumbsUp className="thumbs-up-icon" />
          )}
          <p className="upVote">{upVotesBy.length}</p>
        </UpVoteButton>
      )}
      {downVotesBy && (
        <DownVoteButton
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
        </DownVoteButton>
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
