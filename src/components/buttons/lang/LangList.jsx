import React from 'react';
import PropTypes from 'prop-types';

function LangList({ isOpen, setIsOpen, onSelectedLang }) {
  const selectEnLang = () => {
    onSelectedLang('en');
    setIsOpen(false);
  };

  const selectIdLang = () => {
    onSelectedLang('id');
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <div className="lang-list">
        <button className="lang-item" onClick={selectEnLang} type="button">
          English (USA)
        </button>
        <button className="lang-item" onClick={selectIdLang} type="button">
          Indonesia
        </button>
      </div>
    );
  }
}

LangList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  onSelectedLang: PropTypes.func.isRequired,
};

export default LangList;
