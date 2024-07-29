import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <form id="loginForm" className="login__form">
      <fieldset className='form__fieldset'>
        <input
          className="form__input-email"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          required
        />
      </fieldset>
      <fieldset className='form__fieldset'>
        <div className="form__password__container">
          <input
            className="form__input-password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            required
          />
          <button
            className="password__visible-btn"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <FaEye className="eye-icon" />
            ) : (
              <FaEyeSlash className="eye-icon" />
            )}
          </button>
        </div>
        {/* <p className='invalid-input-text'>Invalid</p> */}
      </fieldset>
      <button
        className="login__submit-btn"
        type="button"
        onClick={() => login({ email, password })}
      >
        Log In
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
