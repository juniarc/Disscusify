import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const Button = styled.button`
  background-color: var(--var-color-blue-to-red);
  border-radius: 32px;

  color: white;
  font-weight: 700;

  display: flex;
  align-items: center;

  @media screen and (min-width: 1280px) {
    padding: 1em 1.5em;

    column-gap: 1em;
  }
  @media screen and (max-width: 1280px) {
    padding: 1em 1.5em;

    font-size: 0.625em;
    column-gap: 0.5em;
  }
  @media screen and (max-width: 768px) {
    padding: 1em 1.5em;

    font-size: 0.625em;
    column-gap: 0.5em;
  }
`;

const AddThreadButton = styled(Button)``;

function CreateThreadBtn({ handleCreateThreadBtn, t }) {
  return (
    <AddThreadButton
      className="create-thread-btn"
      onClick={handleCreateThreadBtn}
      type="button"
    >
      {t('Create Thread')}
      <FaPlus className="plus-icon" />
    </AddThreadButton>
  );
}

CreateThreadBtn.propTypes = {
  handleCreateThreadBtn: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CreateThreadBtn;
