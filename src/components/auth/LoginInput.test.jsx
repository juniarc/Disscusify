/* eslint-disable import/no-extraneous-dependencies */
/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LoginInput from './LoginInput';
import errorStatusReducer from '../../states/error/reducer';

// mock store
const store = configureStore({
  reducer: {
    errorStatus: errorStatusReducer,
  },
});

// mock t function
const t = (key) => key;

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle email typing correctly', async () => {
    // arrange
    render(
      <Provider store={store}>
        <LoginInput login={() => {}} t={t} />
      </Provider>,
    );
    const emailInput = screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'emailtest@gmail.com');

    // assert
    expect(emailInput).toHaveValue('emailtest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(
      <Provider store={store}>
        <LoginInput login={() => {}} t={t} />
      </Provider>,
    );
    const passwordInput = screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, '123456789');

    // assert
    expect(passwordInput).toHaveValue('123456789');
  });

  it('should call login function when login button is clickeed', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(
      <Provider store={store}>
        <LoginInput login={mockLogin} t={t} />
      </Provider>,
    );
    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest@gmail.com');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '123456789');
    const loginButton = screen.getByRole('button', {
      name: 'Log In',
    });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest@gmail.com',
      password: '123456789',
    });
  });
});
