import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import SearchForm from './SearchForm';

function AppHeader({ path, onLogout }) {
    if(path === '/') {
        return (
            <>
                <h3 className='header__logo'>Discussify</h3>
                <SearchForm />
                <div className="header__nav__container">
                    <nav className='header__nav'>
                        <Link className='header__nav__leaderboard' to='/leaderboard'>Leaderboard</Link>
                    </nav>
                    <button className='header__nav__logout-btn' onClick={onLogout}>Log Out</button>
                </div>
                <div className="header__nav__btn__container">
                    <button className='header__nav__burger-btn'>
                        <FaBars className='burger-icon'/>
                    </button>
                    <button className="header__nav__search-btn">
                        <FaSearch className='search-icon'/>
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <h3 className='header__logo'>Discussify</h3>
            <div className="header__nav__container">
                <nav className='header__nav'>
                    <Link className='header__nav__leaderboard' to='/leaderboard'>Leaderboard</Link>
                </nav>
                <button className='header__nav__logout-btn' onClick={onLogout}>Log Out</button>
            </div>
            <div className="header__nav__btn__container">
                <button className='header__nav__burger-btn'>
                    <FaBars />
                </button>
                <button className="header__nav__search-btn">
                    <FaSearch />
                </button>
            </div>
        </>        
    )
}

export default AppHeader;