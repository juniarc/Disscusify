/**
 * asyncSetAuthUser scenario test
 *
 * asyncSetAuthUser thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

import api from '../../utils/api';
import { asyncSetAuthUser, setAuthUserActionCreator } from './action';
import { getErrorStatusAndMessage } from '../error/action';

const email = 'john@example.com';
const password = '123456789';
const token = 'fake-token';
const authUser = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

const dispatch = jest.fn();

jest.mock('../../utils/api', () => ({
  login: jest.fn(),
  putAccessToken: jest.fn(),
  getOwnProfile: jest.fn(),
}));

jest.mock('../error/action', () => ({
  getErrorStatusAndMessage: jest.fn(),
}));

describe('asynSetAuthUser thunk', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.login.mockResolvedValue(token);
    api.getOwnProfile.mockResolvedValue(authUser);

    // action
    await asyncSetAuthUser({ email, password })(dispatch);

    // assert
    expect(api.login).toHaveBeenCalledWith({ email, password });
    expect(api.putAccessToken).toHaveBeenCalledWith(token);
    expect(api.getOwnProfile).toHaveBeenCalledWith();
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(authUser));
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // arrange
    api.login.mockRejectedValue(fakeErrorResponse);

    // action
    await asyncSetAuthUser({ email, password })(dispatch);

    // assert
    expect(api.login).toHaveBeenCalledWith({ email, password });
    expect(api.putAccessToken).not.toHaveBeenCalledWith();
    expect(api.getOwnProfile).not.toHaveBeenCalledWith();
    expect(dispatch).toHaveBeenCalledWith(getErrorStatusAndMessage({ status: 'fail', message: 'error' }));
  });
});
