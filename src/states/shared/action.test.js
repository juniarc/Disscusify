/**
 * asyncPopulateUsersAndThreads scenario test
 *
 * asyncPopulateUsersAndThreads thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

import api from '../../utils/api';
import { asyncPopulateUsersAndThreads } from './action';
import { startLoadingActionCreator, endLoadingActionCreator } from '../isLoading/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

jest.mock('../threads/action', () => ({
  receiveThreadsActionCreator: jest.fn(),
  receiveUsersActionCreator: jest.fn(),
}));

jest.mock('../isLoading/action', () => ({
  startLoadingActionCreator: jest.fn(),
  endLoadingActionCreator: jest.fn(),
}));

jest.mock('../../utils/api', () => ({
  getAllThreads: jest.fn(),
  getAllUsers: jest.fn(),
}));

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    api.getAllUsers.mockRejectedValue(fakeErrorResponse);
    api.getAllThreads.mockRejectedValue(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
    expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.getAllUsers.mockResolvedValue(fakeUsersResponse);
    api.getAllThreads.mockResolvedValue(fakeThreadsResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
  });
});
