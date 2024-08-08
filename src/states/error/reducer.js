import { ActionType } from './action';

function errorStatusReducer(errorStatus = {}, action = {}) {
  switch (action.type) {
    case ActionType.GET_ERROR_STATUS_AND_MESSAGE:
      return {
        ...errorStatus,
        status: action.payload.status,
        message: action.payload.message,
      };
    case ActionType.CLEAR_ERROR_STATUS:
      return {
        ...errorStatus,
        status: '',
        message: '',
      };
    default:
      return errorStatus;
  }
}

export default errorStatusReducer;
