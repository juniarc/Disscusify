/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import VoteBtns from '../buttons/VoteBtns';
import CommentsSection from './comment/CommentsSection';

function DetailInteractions({
  id,
  upVotesBy,
  downVotesBy,
  authUser,
  upVote,
  downVote,
  neutralVote,
  comments,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
  addComment,
  t,
}) {
  return (
    <div className="detail-page__interactions">
      <div className="detail-page__vote">
        <VoteBtns
          id={id}
          upVote={upVote}
          downVote={downVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          authUser={authUser.id}
          neutralVote={neutralVote}
        />
      </div>
      <CommentsSection
        comments={comments}
        authUser={authUser}
        upVoteComment={upVoteComment}
        downVoteComment={downVoteComment}
        neutralVoteComment={neutralVoteComment}
        addComment={addComment}
        t={t}
      />
    </div>
  );
}

DetailInteractions.propTypes = {
  id: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralVoteComment: PropTypes.func.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default DetailInteractions;
