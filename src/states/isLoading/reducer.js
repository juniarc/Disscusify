import { ActionType } from './action';

function isLoadingReducer(isLoading = false, action = {}) {
  switch (action.type) {
    case ActionType.START_LOADING:
      return (isLoading = true);
    case ActionType.END_LOADING:
      return (isLoading = false);
    default:
      return isLoading;
  }
}

export default isLoadingReducer;
