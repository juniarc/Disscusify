import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/pages/AuthPage.css';
import '../styles/blocks/Blocks.css';
import LoginInput from '../components/auth/LoginInput';
import ThemeBtn from '../components/buttons/ThemeBtn';
import LangBtn from '../components/buttons/lang/LangBtn';
import LangList from '../components/buttons/lang/LangList';
import { asyncSetAuthUser } from '../states/authUser/action';
import { clearErrorStatus } from '../states/error/action';

function LoginPage({ theme, changeTheme, t, selectedLang, onSelectedLang }) {
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearErrorStatus());
  }, [dispatch]);

  const onSetOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="auth-page">
      <div className="auth-page__left">
        <h3 className="auth-page__logo">Discussify</h3>
        <h1 className="auth-page__hero-text">
          {t('Where Conversation Comes Alive')}
        </h1>
      </div>
      <div className="auth-page__right">
        <header className="auth-page__right__header">
          <ThemeBtn theme={theme} changeTheme={changeTheme} t={t} />
          <div className="lang__container">
            <LangBtn onSetOpen={onSetOpen} selectedLang={selectedLang} />
            <LangList
              isOpen={isOpen}
              setIsOpen={setOpen}
              onSelectedLang={onSelectedLang}
            />
          </div>
        </header>
        <div className="auth-page__right__body">
          <h2 className="auth-page__right__title">{t('Login')}</h2>
          <LoginInput login={onLogin} t={t} />
          <div className="divider-container">
            <div className="divider-line" />
            <p>{t('Or')}</p>
            <div className="divider-line" />
          </div>
          <Link className="auth-page__navigate-button login" to="/register">
            {t('Create Account')}
          </Link>
        </div>
      </div>
    </section>
  );
}

LoginPage.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  selectedLang: PropTypes.string.isRequired,
  onSelectedLang: PropTypes.func.isRequired,
};

export default LoginPage;
