import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import {
  useInputName,
  useInputEmail,
  useInputPassword,
} from '../../hooks/useInput';
import Spinner from '../spinner/Spinner';

import '../../styles/components/AuthForm.css';

function RegisterInput({ register, t }) {
  const errorStatus = useSelector((states) => states.errorStatus);
  const isLoading = useSelector((states) => states.isLoading);

  const [name, onNameChange, isNameValid, setNameValid] = useInputName('');
  const [email, onEmailChange, isEmailValid, setEmailValid] = useInputEmail('');
  const [password, onPasswordChange, isPasswordValid, setPasswordValid] = useInputPassword('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const onSubmit = () => {
    if (name.length === 0 && email.length === 0 && password.length === 0) {
      setNameValid(false);
      setEmailValid(false);
      setPasswordValid(false);
      return;
    }
    register({ name, email, password });
  };

  return (
    <form id="authForm" className="auth-form">
      <fieldset className="auth__fieldset">
        <input
          className="auth__input-name"
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Full Name"
          required
        />
        <p
          className="invalid-input-text"
          style={{ visibility: !isNameValid ? 'visible' : 'hidden' }}
        >
          {t('Name can not be empty')}
        </p>
      </fieldset>
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
            placeholder="Password"
            required
          />
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
        <p
          className="invalid-input-text"
          style={{ visibility: !isPasswordValid ? 'visible' : 'hidden' }}
        >
          {t('Password must be at least 8 characters')}
        </p>
      </fieldset>
      {errorStatus.status === 'fail' && (
        <p className="invalid-input-text">{errorStatus.message}</p>
      )}
      <button
        className="register__submit-button"
        type="button"
        onClick={onSubmit}
      >
        {isLoading ? <Spinner /> : t('Create Account')}
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default RegisterInput;
