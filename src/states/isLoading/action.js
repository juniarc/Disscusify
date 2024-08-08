const ActionType = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
};

function startLoadingActionCreator() {
  return {
    type: ActionType.START_LOADING,
  };
}

function endLoadingActionCreator() {
  return {
    type: ActionType.END_LOADING,
  };
}

export { ActionType, startLoadingActionCreator, endLoadingActionCreator };
