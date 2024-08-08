/**
 * test scenario for categoriesReducer
 *
 * categoriesReducer function
 * - should return the initial state when given by uknown action
 * - should return the categories when given by RECEIVE_CATEGORIES
 */

import categoriesReducer from './reducer';

describe('categoriesReducer function', () => {
  it('should return the initial state when given by uknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UKNOWN' };

    // action
    const nextState = categoriesReducer(initialState, action);

    // assert

    expect(nextState).toEqual(initialState);
  });

  it('should return the categories when given by RECEIVE_CATEGORIES', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_CATEGORIES',
      payload: {
        categories: ['redux', 'react'],
      },
    };

    // action
    const nextState = categoriesReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.categories);
  });
});
