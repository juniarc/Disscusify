/**
 * asyncGetAllLeaderboards scenario test
 *
 * asyncGetAllLeaderboards thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

import api from '../../utils/api';
import {
  asyncGetAllLeaderboards,
  getAllLeaderboardsActionCreator,
} from './action';
import {
  startLoadingActionCreator,
  endLoadingActionCreator,
} from '../isLoading/action';

// mock
const dispatch = jest.fn();

window.alert = jest.fn();

jest.mock('../../utils/api', () => ({
  getAllLeaderboards: jest.fn(),
}));

jest.mock('../isLoading/action', () => ({
  startLoadingActionCreator: jest.fn(),
  endLoadingActionCreator: jest.fn(),
}));

const fakeLeaderboards = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetAllLeaderboards thunk', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.getAllLeaderboards.mockResolvedValue(fakeLeaderboards);

    // action
    await asyncGetAllLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
    expect(dispatch).toHaveBeenCalledWith(
      getAllLeaderboardsActionCreator(fakeLeaderboards),
    );
    expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // arrange
    api.getAllLeaderboards.mockRejectedValue(fakeErrorResponse);

    // action
    await asyncGetAllLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
  });
});
