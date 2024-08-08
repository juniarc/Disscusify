import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import {
  startLoadingActionCreator,
  endLoadingActionCreator,
} from '../isLoading/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      dispatch(startLoadingActionCreator());
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(endLoadingActionCreator());
    }
  };
}

export { asyncPopulateUsersAndThreads };
