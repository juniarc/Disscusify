/**
 * test scenario for errorStatusReducer
 *
 * errorStatusReducer function
 * - should return the initial state when given by uknown action
 * - should return the status and message when given by GET_ERROR_STATUS_AND_MESSAGE
 * - should return the status and message '' when given by CLEAR_ERROR_STATUS
 */

import errorStatusReducer from './reducer';

describe('errorStatusReducer function', () => {
  it('should return the initial state when given by uknown action', () => {
    // arrange
    const initialState = {};
    const action = { type: 'UKNOWN' };

    // action
    const nextState = errorStatusReducer(initialState, action);

    // assert

    expect(nextState).toEqual(initialState);
  });

  it('should return the status and message when given by GET_ERROR_STATUS_AND_MESSAGE', () => {
    // arrange
    const initialState = {};
    const action = {
      type: 'GET_ERROR_STATUS_AND_MESSAGE',
      payload: {
        status: 'fail',
        message: 'fail to fetch data',
      },
    };

    // action
    const nextState = errorStatusReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      status: action.payload.status,
      message: action.payload.message,
    });
  });

  it('should return the status and message ("") when given by CLEAR_ERROR_STATUS', () => {
    // arrange
    const initialState = {
      status: 'fail',
      message: 'fail to fetch data',
    };
    const action = {
      type: 'CLEAR_ERROR_STATUS',
    };

    // action
    const nextState = errorStatusReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      status: '',
      message: '',
    });
  });
});
