/* eslint-disable no-alert */
import api from '../../utils/api';
import {
  startLoadingActionCreator,
  endLoadingActionCreator,
} from '../isLoading/action';

const ActionType = {
  GET_ALL_LEADERBOARDS: 'GET_ALL_LEADERBOARDS',
};

function getAllLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.GET_ALL_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncGetAllLeaderboards() {
  return async (dispatch) => {
    dispatch(startLoadingActionCreator());
    try {
      const leaderboards = await api.getAllLeaderboards();
      dispatch(getAllLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(endLoadingActionCreator());
    }
  };
}

export { ActionType, getAllLeaderboardsActionCreator, asyncGetAllLeaderboards };
