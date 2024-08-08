import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa';

function CommentsBtn({ id, totalComments }) {
  const navigate = useNavigate();

  const onCommentClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <button className="comments__btn" onClick={onCommentClick} type="button">
      <FaCommentDots className="comment-icon" />
      <p className="comments__number">{totalComments}</p>
    </button>
  );
}

CommentsBtn.propTypes = {
  id: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default CommentsBtn;
