import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/pages/AuthPage.css';
import '../styles/blocks/Blocks.css';
import RegisterInput from '../components/auth/RegisterInput';
import ThemeBtn from '../components/buttons/ThemeBtn';
import LangBtn from '../components/buttons/lang/LangBtn';
import LangList from '../components/buttons/lang/LangList';
import { asyncRegisterUser } from '../states/users/action';
import { clearErrorStatus } from '../states/error/action';

function RegisterPage({ theme, changeTheme, t, selectedLang, onSelectedLang }) {
  const [isOpen, setOpen] = useState(false);
  const errorStatus = useSelector((states) => states.errorStatus);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearErrorStatus());
  }, [dispatch]);

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    if (errorStatus.status !== 'fail') {
      navigate('/');
    }
  };

  const onSetOpen = () => {
    setOpen((prevState) => !prevState);
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
          <h2 className="auth-page__right__title">{t('Create Account')}</h2>
          <RegisterInput register={onRegister} t={t} />
          <div className="divider-container">
            <div className="divider-line" />
            <p>{t('Or')}</p>
            <div className="divider-line" />
          </div>
          <Link className="auth-page__navigate-button register" to="/">
            {t('Log In')}
          </Link>
        </div>
      </div>
    </section>
  );
}

RegisterPage.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  selectedLang: PropTypes.string.isRequired,
  onSelectedLang: PropTypes.func.isRequired,
};

export default RegisterPage;
