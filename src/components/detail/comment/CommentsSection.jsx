/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';
import CommentForm from './CommentForm';

import '../../../styles/components/CommentSection.css';

function CommentsSection({
  authUser,
  comments,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
  addComment,
  t,
}) {
  return (
    <section className="comments-section">
      <p className="comments-section__title">
        {t('Comments')}
        (
        {
            comments.length
        }
        )
      </p>
      <section className="add-comment">
        <div className="add-comment__img-container">
          <img
            src={authUser.avatar}
            alt={authUser.name}
            className="add-comment__img"
          />
        </div>
        <CommentForm addComment={addComment} t={t} />
      </section>
      <div className="comments-section__comment-list">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
            upVoteComment={upVoteComment}
            downVoteComment={downVoteComment}
            neutralVoteComment={neutralVoteComment}
            authUser={authUser}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}

CommentsSection.propTypes = {
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralVoteComment: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  authUser: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default CommentsSection;
