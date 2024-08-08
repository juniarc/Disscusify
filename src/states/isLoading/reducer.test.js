/**
 * test scenario for isLoadingReducer
 *
 * isLoadingReducer function
 * - should return the initial state when given by uknown action
 * - should return the isLoading true when given by START_LOADING
 * - should return the isLoading false when given by END_LOADING
 */

import isLoadingReducer from './reducer';

describe('isLoadingReducer function', () => {
  it('should return the initial state when given by uknown action', () => {
    // arrange
    const initialState = false;
    const action = { type: 'UKNOWN' };

    // action
    const nextState = isLoadingReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the isLoading true when given by START_LOADING', () => {
    // arrange
    let initialState = false;
    const action = {
      type: 'START_LOADING',
    };

    // action
    const nextState = isLoadingReducer(initialState, action);

    // assert
    expect(nextState).toEqual((initialState = true));
  });

  it('should return the isLoading false when given by END_LOADING', () => {
    // arrange
    let initialState = false;
    const action = {
      type: 'END_LOADING',
    };

    // action
    const nextState = isLoadingReducer(initialState, action);

    // assert
    expect(nextState).toEqual((initialState = false));
  });
});
