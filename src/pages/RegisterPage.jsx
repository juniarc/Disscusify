import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import ThemeBtn from '../components/ThemeBtn';
import LangBtn from '../components/LangBtn';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage({ theme, changeTheme }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onRegister = ({ name, email, password }) => {
        dispatch(asyncRegisterUser({ name, email, password }));
        navigate('/');
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
                    <h2 className='auth-page__right-container__title'>Create Account</h2>
                    <RegisterInput register={onRegister}/>
                    <div className="divider-container">
                        <div className="divider-line"></div>
                        <p>Or</p>
                        <div className="divider-line"></div>
                    </div>
                    <Link className="auth-page__navigate-btn register" to="/">Log In</Link>
                </div>
            </div>
        </section>
    )
}

RegisterPage.propTypes = {
    theme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired
}

export default RegisterPage