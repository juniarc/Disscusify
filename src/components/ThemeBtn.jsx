import React from 'react';
import PropTypes from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeBtn({ theme, changeTheme }) {

    return(
        <button className="mode-btn" onClick={changeTheme}>
            {
                theme === 'light-theme' ? <><FaMoon className='mode-icon'/> Dark Mode</>  : <><FaSun className='mode-icon' /> Light Mode</>
            }
        </button>
    )
}

ThemeBtn.propTypes = {
    theme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired
}

export default ThemeBtn;
