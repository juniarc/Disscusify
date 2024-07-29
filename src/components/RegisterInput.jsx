import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <form id="registerForm" className="register__form">
      <fieldset className="form__fieldset">
        <input
          className="form__input-name"
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Full Name"
          required
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <input
          className="form__input-email"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          required
        />
      </fieldset>
      <fieldset className="form__fieldset">
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
        className="register__submit-btn"
        type="button"
        onClick={() => register({ name, email, password })}
      >
        Create Account
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired
}

export default RegisterInput;
