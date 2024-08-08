/**
 * test scenario for authUserReducer
 *
 * authUserReducer function
 * - should return the initial state when given by uknown action
 * - should return the authUser when given by SET_AUTH_USER
 * - should return the authUser null when given by UNSET_AUTH_USER
 */

import authUserReducer from './reducer';

describe('authUserReducer', () => {
  it('should return the initial state when given by uknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by SET_AUTH_USER', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return the authUser null when given by UNSET_AUTH_USER', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'UNSET_AUTH_USER',
      payload: {
        authUser: null,
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
});
