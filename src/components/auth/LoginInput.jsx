import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useInputPassword, useInputEmail } from '../../hooks/useInput';
import Spinner from '../spinner/Spinner';

import '../../styles/components/AuthForm.css';

function LoginInput({ login, t }) {
  const errorStatus = useSelector((states) => states.errorStatus);
  const isLoading = useSelector((states) => states.isLoading);

  const [email, onEmailChange, isEmailValid, setEmailValid] = useInputEmail('');
  const [password, onPasswordChange, isPasswordValid, setPasswordValid] = useInputPassword('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const onSubmit = () => {
    if (email.length === 0 && password.length === 0) {
      setEmailValid(false);
      setPasswordValid(false);
      return;
    }

    login({ email, password });
  };

  return (
    <form id="authForm" className="auth-form">
      <fieldset className="auth__fieldset">
        <input
          className="auth__input-email"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          required
        />
        <p
          className="invalid-input-text"
          style={{ visibility: !isEmailValid ? 'visible' : 'hidden' }}
        >
          {t('Invalid email adress')}
        </p>
      </fieldset>
      <fieldset className="auth__fieldset">
        <div className="auth__password__container">
          <input
            className="auth__input-password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onChange={onPasswordChange}
            placeholder={t('Password')}
            required
          />
          <p
            className="invalid-input-text"
            style={{ visibility: !isPasswordValid ? 'visible' : 'hidden' }}
          >
            {t('Password must be at least 8 characters')}
          </p>
          {errorStatus.status === 'fail' && (
            <p className="invalid-input-text">{errorStatus.message}</p>
          )}
          <button
            className="password__visible-button"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <FaEye className="eye-icon" />
            ) : (
              <FaEyeSlash className="eye-icon" />
            )}
          </button>
        </div>
      </fieldset>
      <button
        className="login__submit-button"
        type="button"
        onClick={onSubmit}
      >
        {isLoading ? <Spinner /> : t('Log In')}
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default LoginInput;
