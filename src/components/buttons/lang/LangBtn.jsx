import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';

function LangBtn({ onSetOpen, selectedLang }) {
  return (
    <button className="lang-button" onClick={onSetOpen} type="button">
      <p>{selectedLang === 'en' ? 'English (USA)' : 'Indonesia'}</p>
      <FaChevronDown />
    </button>
  );
}

LangBtn.propTypes = {
  onSetOpen: PropTypes.func.isRequired,
  selectedLang: PropTypes.string.isRequired,
};

export default LangBtn;
