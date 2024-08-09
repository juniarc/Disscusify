import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Button = styled.button`
  color: white;

  @media screen and (min-width: 1280px) {
    margin-bottom: 6px;
  }
`;

const list = styled.div`
  position: absolute;
  width: fit-content;
  top: 100%;

  background-color: #03346e;
  border-radius: 0 0 16px 0;

  @media screen and (min-width: 1280px) {
    padding: 10px 10px;
  }

  @media screen and (max-width: 1280px) {
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const LangItem = styled(Button)``;
const ListLang = styled(list)``;

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
      <ListLang className="lang-list">
        <LangItem className="lang-item" onClick={selectEnLang} type="button">
          English (USA)
        </LangItem>
        <LangItem className="lang-item" onClick={selectIdLang} type="button">
          Indonesia
        </LangItem>
      </ListLang>
    );
  }
}

LangList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  onSelectedLang: PropTypes.func.isRequired,
};

export default LangList;
