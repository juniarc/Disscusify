import filterThreadsHelper from '../../utils/threadsFilterHelper';

const ActionType = {
  FILTER_THREADS: 'FILTER_THREADS',
  RESET_FILTERED_THREADS: 'RESET_FILTERED_THREADS',
};

function filterThreadsActionCreator(filteredThreads) {
  return {
    type: ActionType.FILTER_THREADS,
    payload: {
      filteredThreads,
    },
  };
}

function resetFilteredThreadsActionCreator(threads) {
  return {
    type: ActionType.RESET_FILTERED_THREADS,
    payload: {
      threads,
    },
  };
}

function filterThreads({ searchQuery, selectedCategory }) {
  return (dispatch, getState) => {
    const { threads } = getState();
    const filteredThreads = filterThreadsHelper({
      threads,
      searchQuery,
      selectedCategory,
    });
    dispatch(filterThreadsActionCreator(filteredThreads));
  };
}

function resetFilteredThreads(threads) {
  return (dispatch) => {
    dispatch(resetFilteredThreadsActionCreator(threads));
  };
}

export {
  ActionType,
  filterThreadsActionCreator,
  resetFilteredThreadsActionCreator,
  filterThreads,
  resetFilteredThreads,
};
