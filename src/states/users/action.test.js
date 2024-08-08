/**
 * asyncRegisterUser scenario test
 *
 * asyncRegisterUser thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

import api from '../../utils/api';
import { asyncRegisterUser } from './action';
import {
  startLoadingActionCreator,
  endLoadingActionCreator,
} from '../isLoading/action';
import { getErrorStatusAndMessage } from '../error/action';

const name = 'John Doe';
const email = 'johndoe@example.com';
const password = '123456789';
const user = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

// mock
const dispatch = jest.fn();

jest.mock('../../utils/api', () => ({
  register: jest.fn(),
}));

jest.mock('../error/action', () => ({
  getErrorStatusAndMessage: jest.fn(),
}));

jest.mock('../isLoading/action', () => ({
  startLoadingActionCreator: jest.fn(),
  endLoadingActionCreator: jest.fn(),
}));

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.register.mockResolvedValue(user);

    // action
    await asyncRegisterUser({ name, email, password })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
    expect(api.register).toHaveBeenCalledWith({ name, email, password });
    expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // arrange
    api.register.mockRejectedValue(fakeErrorResponse);

    // action
    await asyncRegisterUser({ name, email, password })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
    expect(api.register).toHaveBeenCalledWith({ name, email, password });
    expect(dispatch).toHaveBeenCalledWith(getErrorStatusAndMessage({ status: 'fail', message: 'error' }));
    expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
  });
});
