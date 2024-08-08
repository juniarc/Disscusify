import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../spinner/Spinner';

function CommentForm({ addComment, t }) {
  const isLoading = useSelector((states) => states.isLoading);
  const [comment, setComment] = useState('');

  function onCommentSubmit() {
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  }

  function handlerContentChange({ target }) {
    setComment(target.value);
  }

  return (
    <div className="comment-form">
      <textarea
        type="text"
        className="comment-input"
        placeholder={t('Add a comment')}
        value={comment}
        onChange={handlerContentChange}
      />
      <button
        type="button"
        className="comment-submit"
        onClick={onCommentSubmit}
      >
        {isLoading ? <Spinner /> : t('Comment')}
      </button>
    </div>
  );
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CommentForm;
