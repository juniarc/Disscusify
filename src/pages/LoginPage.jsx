import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import ThemeBtn from '../components/ThemeBtn';
import LangBtn from '../components/LangBtn';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage({ theme, changeTheme }) {
    const dispatch = useDispatch();

    const onLogin = ({ email, password }) => {
        dispatch(asyncSetAuthUser({ email, password }));
    }

    return (
        <section className='auth-page'>
            <div className="auth-page__left-container">
                <h3 className='auth-page__left-container__logo'>Discussify</h3>
                <h1 className='auth-page__left-container__hero-text'>Where Conversation Comes Alive</h1>
            </div>
            <div className="auth-page__right-container">
                <header className='auth-page__right-container__header'>
                    <ThemeBtn theme={theme} changeTheme={changeTheme}/>
                    <LangBtn />
                </header>
                <div className="auth-page__right-container__body">
                    <h2 className='auth-page__right-container__title'>Login</h2>
                    <LoginInput login={onLogin}/>
                    <div className="divider-container">
                        <div className="divider-line"></div>
                        <p>Or</p>
                        <div className="divider-line"></div>
                    </div>
                    <Link className="auth-page__navigate-btn login" to="/register">Create Account</Link>
                </div>
            </div>
        </section>
    )
}

LoginPage.propTypes = {
    theme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired
}

export default LoginPage;
