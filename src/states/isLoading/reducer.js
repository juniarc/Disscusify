import { ActionType } from './action';

function isLoadingReducer(isLoading = false, action = {}) {
  switch (action.type) {
    case ActionType.START_LOADING:
      return true;
    case ActionType.END_LOADING:
      return false;
    default:
      return isLoading;
  }
}

export default isLoadingReducer;
