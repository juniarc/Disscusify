import { ActionType } from './action';

function themeReducer(theme = '', action = {}) {
  switch (action.type) {
    case ActionType.GET_THEME:
      return action.payload.theme;
    case ActionType.SET_THEME:
      return action.payload.theme;
    default:
      return theme;
  }
}

export default themeReducer;
