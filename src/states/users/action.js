import api from '../../utils/api';
import { getErrorStatusAndMessage } from '../error/action';
import {
  startLoadingActionCreator,
  endLoadingActionCreator,
} from '../isLoading/action';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    try {
      dispatch(startLoadingActionCreator());
      await api.register({ name, email, password });
    } catch (error) {
      dispatch(
        getErrorStatusAndMessage({ status: 'fail', message: error.message }),
      );
    } finally {
      dispatch(endLoadingActionCreator());
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
