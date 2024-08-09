/* eslint-disable import/no-extraneous-dependencies */
/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RegisterInput from './RegisterInput';
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
  it('should handle name typing correctly', async () => {
    // arrange
    render(
      <Provider store={store}>
        <RegisterInput register={() => {}} t={t} />
      </Provider>,
    );
    const nameInput = screen.getByPlaceholderText('Full Name');

    // action
    await userEvent.type(nameInput, 'nametest');

    // assert
    expect(nameInput).toHaveValue('nametest');
  });
  it('should handle email typing correctly', async () => {
    // arrange
    render(
      <Provider store={store}>
        <RegisterInput register={() => {}} t={t} />
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
        <RegisterInput register={() => {}} t={t} />
      </Provider>,
    );
    const passwordInput = screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, '123456789');

    // assert
    expect(passwordInput).toHaveValue('123456789');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegister = jest.fn();
    render(
      <Provider store={store}>
        <RegisterInput register={mockRegister} t={t} />
      </Provider>,
    );
    const nameInput = screen.getByPlaceholderText('Full Name');
    await userEvent.type(nameInput, 'nametest');
    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest@gmail.com');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '123456789');
    const registerButton = screen.getByRole('button', {
      name: 'Create Account',
    });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'emailtest@gmail.com',
      password: '123456789',
    });
  });
});
