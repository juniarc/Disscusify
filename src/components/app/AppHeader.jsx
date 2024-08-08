import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import SearchForm from '../SearchForm';
import { resetFilteredThreads } from '../../states/filteredThreads/action';

import '../../styles/components/AppHeader.css';

function AppHeader({ path, onLogout, t }) {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const threads = useSelector((states) => states.threads);

  const dispatch = useDispatch();

  const handleNavMenu = () => {
    setNavOpen((prevState) => !prevState);
  };

  const handleSearchNav = () => {
    setSearchOpen((prevState) => !prevState);
  };

  const handleClick = () => {
    dispatch(resetFilteredThreads(threads));
  };

  if (path === '/') {
    return (
      <>
        <Link to="/" onClick={handleClick}>
          <h3 className="header__logo">Discussify</h3>
        </Link>
        <SearchForm isOpen={isSearchOpen} t={t} />
        <div className={`header__nav__container ${isNavOpen ? 'show' : ''}`}>
          <button
            className="header__nav__close-btn"
            type="button"
            aria-label="close button"
            onClick={handleNavMenu}
          >
            <IoClose className="close-icon" />
          </button>
          <nav className="header__nav">
            <Link className="header__nav__leaderboard" to="/leaderboards">
              {t('Leaderboard')}
            </Link>
          </nav>
          <button
            className="header__nav__logout-btn"
            type="button"
            onClick={onLogout}
          >
            {t('Log Out')}
          </button>
        </div>
        <div className="header__nav__btn__container">
          <button
            className="header__nav__burger-btn"
            type="button"
            aria-label="burger button"
            onClick={handleNavMenu}
          >
            <FaBars className="burger-icon" />
          </button>
          <button
            className="header__nav__search-btn"
            aria-label="search button"
            type="button"
            onClick={handleSearchNav}
          >
            <FaSearch className="search-icon" />
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Link to="/" onClick={handleClick}>
        <h3 className="header__logo">Discussify</h3>
      </Link>
      <div className="header__nav__container">
        <nav className="header__nav">
          <Link className="header__nav__leaderboard" to="/leaderboards">
            {t('Leaderboard')}
          </Link>
        </nav>
        <button
          className="header__nav__logout-btn"
          type="button"
          onClick={onLogout}
        >
          {t('Log Out')}
        </button>
      </div>
      <div className="header__nav__btn__container">
        <button
          className="header__nav__burger-btn"
          type="button"
          aria-label="burger button"
        >
          <FaBars />
        </button>
      </div>
    </>
  );
}

AppHeader.propTypes = {
  path: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default AppHeader;
