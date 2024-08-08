const ActionType = {
  GET_ERROR_STATUS_AND_MESSAGE: 'GET_ERROR_STATUS_AND_MESSAGE',
  CLEAR_ERROR_STATUS: 'CLEAR_ERROR_STATUS',
};

function getErrorStatusAndMessage({ status, message }) {
  return {
    type: ActionType.GET_ERROR_STATUS_AND_MESSAGE,
    payload: {
      status,
      message,
    },
  };
}

function clearErrorStatus() {
  return {
    type: ActionType.CLEAR_ERROR_STATUS,
  };
}

export { ActionType, getErrorStatusAndMessage, clearErrorStatus };
