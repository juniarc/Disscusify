import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearErrorStatus } from '../states/error/action';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    setValue(target.value);
  }

  return [value, handleValueChange];
}

function useInputName(defaultValue = '') {
  const [name, setName] = useState(defaultValue);
  const [isValid, setValid] = useState(true);
  const dispatch = useDispatch();

  function handleNameChange({ target }) {
    setName(target.value);

    if (target.value.length > 0) {
      dispatch(clearErrorStatus());
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return [name, handleNameChange, isValid, setValid];
}

function useInputEmail(defaultValue = '') {
  const [email, setEmail] = useState(defaultValue);
  const [isValid, setValid] = useState(true);

  const disaptch = useDispatch();

  const validateEmail = (emailInput) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailInput);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);

    if (validateEmail(target.value)) {
      disaptch(clearErrorStatus());
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return [email, handleEmailChange, isValid, setValid];
}

function useInputPassword(defaultValue = '') {
  const [password, setPassword] = useState(defaultValue);
  const [isValid, setValid] = useState(true);
  const dispatch = useDispatch();

  const handlePasswordChange = ({ target }) => {
    const MIN_PASSWORD_LENGTH = 8;

    setPassword(target.value);

    if (target.value.length < MIN_PASSWORD_LENGTH) {
      setValid(false);
    } else {
      dispatch(clearErrorStatus());
      setValid(true);
    }
  };

  return [password, handlePasswordChange, isValid, setValid];
}

export { useInput, useInputEmail, useInputName, useInputPassword };
