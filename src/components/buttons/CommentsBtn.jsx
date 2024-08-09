import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa';

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

const CommentButton = styled(Button)``;

function CommentsBtn({ id, totalComments }) {
  const navigate = useNavigate();

  const onCommentClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <CommentButton className="comments__btn" onClick={onCommentClick} type="button">
      <FaCommentDots className="comment-icon" />
      <p className="comments__number">{totalComments}</p>
    </CommentButton>
  );
}

CommentsBtn.propTypes = {
  id: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default CommentsBtn;
