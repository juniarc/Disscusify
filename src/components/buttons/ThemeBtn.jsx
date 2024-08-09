import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

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

const ModeButton = styled(Button)``;

function ThemeBtn({ theme, changeTheme, t }) {
  return (
    <ModeButton className="mode-button" onClick={changeTheme} type="button">
      {theme === 'light-theme' ? (
        <>
          <FaMoon className="mode-icon" />
          {t('Dark Mode')}
        </>
      ) : (
        <>
          <FaSun className="mode-icon" />
          {t('Light Mode')}
        </>
      )}
    </ModeButton>
  );
}

ThemeBtn.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default ThemeBtn;
