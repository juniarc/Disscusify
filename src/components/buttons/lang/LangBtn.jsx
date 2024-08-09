import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;

  color: var(--var-color-black-to-white);

  @media screen and (min-width: 1280px) {
    column-gap: 8px;

    height: 24px;
  }
  @media screen and (max-width: 1280px) {
    column-gap: 8px;

    height: 24px;
  }
`;

const LangButton = styled(Button)``;

function LangBtn({ onSetOpen, selectedLang }) {
  return (
    <LangButton className="lang-button" onClick={onSetOpen} type="button">
      <p>{selectedLang === 'en' ? 'English (USA)' : 'Indonesia'}</p>
      <FaChevronDown />
    </LangButton>
  );
}

LangBtn.propTypes = {
  onSetOpen: PropTypes.func.isRequired,
  selectedLang: PropTypes.string.isRequired,
};

export default LangBtn;
