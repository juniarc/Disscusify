import { ActionType } from './action';

function filteredThreadsReducer(filteredThreads = [], action = {}) {
  switch (action.type) {
    case ActionType.FILTER_THREADS:
      return action.payload.filteredThreads;
    case ActionType.RESET_FILTERED_THREADS:
      return action.payload.threads;
    default:
      return filteredThreads;
  }
}

export default filteredThreadsReducer;
