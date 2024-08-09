/* eslint-disable object-shorthand */
/* eslint-disable no-alert */
import api from '../../utils/api';
import {
  startLoadingActionCreator,
  endLoadingActionCreator,
} from '../isLoading/action';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALIZE_THREAD_DETAIL: 'TOGGLE_NEUTRALIZE_THREAD_DETAIL',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
  TOGGLE_NEUTRALIZE_COMMENT: 'TOGGLE_NEUTRALIZE_COMMENT',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleNeutralizeVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleUpVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDownVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleNeutralizeVoteCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function addCommentActionCreator({ userId, comment }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(startLoadingActionCreator());
    dispatch(clearThreadDetailActionCreator);
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(endLoadingActionCreator());
    }
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleUpVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleDownVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleNeutralizeVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleNeutralizeVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(
      toggleUpVoteCommentActionCreator({
        commentId: commentId,
        userId: authUser.id,
      }),
    );

    try {
      await api.toggleUpVoteComment({
        commentId: commentId,
        threadId: detailThread.id,
      });
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleUpVoteCommentActionCreator({
          commentId: commentId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncToggleDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(
      toggleDownVoteCommentActionCreator({
        commentId: commentId,
        userId: authUser.id,
      }),
    );

    try {
      await api.toggleDownVoteComment({
        commentId: commentId,
        threadId: detailThread.id,
      });
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDownVoteCommentActionCreator({
          commentId: commentId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncNeutralizeVoteThreadComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(
      toggleNeutralizeVoteCommentActionCreator({
        userId: authUser.id,
        commentId,
      }),
    );

    try {
      await api.toggleNeutralizeVoteComment({
        commentId: commentId,
        threadId: detailThread.id,
      });
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleNeutralizeVoteCommentActionCreator({
          commentId: commentId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncAddComment({ content }) {
  return async (dispatch, getState) => {
    dispatch(startLoadingActionCreator());
    const { authUser, detailThread } = getState();
    try {
      const comment = await api.addComment({
        threadId: detailThread.id,
        content,
      });
      dispatch(
        addCommentActionCreator({ comment: comment, userId: authUser.id }),
      );
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(endLoadingActionCreator());
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralizeVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleNeutralizeVoteCommentActionCreator,
  addCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncNeutralizeVoteThreadComment,
  asyncAddComment,
};
