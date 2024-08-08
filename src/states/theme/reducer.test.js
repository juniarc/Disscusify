/**
 * test scenario for themeReducer
 *
 * themeReducer function
 * - should return the initial state when given by uknown action
 * - should return the theme when given by GET_THEME
 * - should return the theme when given by SET_THEME
 */

import themeReducer from './reducer';

describe('themeReducer function', () => {
  it('should return the initial state when given by uknown action', () => {
    // arrange
    const initialState = '';
    const action = { type: 'UKNOWN' };

    // action
    const nextState = themeReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the theme when given by GET_THEME', () => {
    // arrange
    const initialState = '';
    const action = {
      type: 'GET_THEME',
      payload: {
        theme: 'dark-theme',
      },
    };

    // action
    const nextState = themeReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.theme);
  });

  it('should return the theme when given by SET_THEME', () => {
    // arrange
    const initialState = '';
    const action = {
      type: 'SET_THEME',
      payload: {
        theme: 'dark-theme',
      },
    };

    // action
    const nextState = themeReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.theme);
  });
});
