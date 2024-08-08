import { ActionType } from './action';

function langReducer(lang = '', action = {}) {
  switch (action.type) {
    case ActionType.GET_LANG:
      return action.payload.lang;
    case ActionType.SET_LANG:
      return action.payload.lang;
    default:
      return lang;
  }
}

export default langReducer;
