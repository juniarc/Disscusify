/**
 * test scenario for filteredThreadsReducer
 *
 * filteredThreadsReducer function
 * - should return the initial state when given by uknown action
 * - should return the filteredThreads when given by FILTER_THREADS
 * - should return the threads when given by RESET_FILTERED_THREADS
 */

import filteredThreadsReducer from './reducer';

describe('filteredThreadReducer function', () => {
  it('should return the initial state when given by uknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UKNOWN' };

    // action
    const nextState = filteredThreadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the filteredThreads when given by FILTER_THREADS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'FILTER_THREADS',
      payload: {
        filteredThreads: [
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
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = filteredThreadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.filteredThreads);
  });

  it('should return the threads when given by RESET_FILTERED_THREADS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RESET_FILTERED_THREADS',
      payload: {
        threads: [
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
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = filteredThreadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });
});
