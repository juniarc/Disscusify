import React from 'react';
import PropTypes from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeBtn({ theme, changeTheme, t }) {
  return (
    <button className="mode-button" onClick={changeTheme} type="button">
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
    </button>
  );
}

ThemeBtn.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default ThemeBtn;
