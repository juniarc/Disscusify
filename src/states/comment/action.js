import api from "../../utils/api";

const ActionType = {
    TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
    TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
    TOGGLE_NEUTRALIZE_COMMENT: 'TOGGLE_NEUTRALIZE_COMMENT',
}

function toggleUpVoteCommentActionCreator({ commentId, userId }) {
    return {
        type: ActionType.TOGGLE_UPVOTE_COMMENT,
        payload: {
            userId,
            commentId,
        }
    }
}

function toggleDownVoteCommentActionCreator({ commentId, userId }) {
    return {
        type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
        payload: {
            userId,
            commentId,
        }
    }
}

function toggleNeutralizeVoteCommentActionCreator({ userId, commentId }) {
    return {
        type: ActionType.TOGGLE_NEUTRALIZE_COMMENT,
        payload: {
            userId,
            commentId,
        }
    }
}

function asyncToggleUpVoteComment(commentId) {
    return async (dispatch, getState) => {
        const { authUser, detailThread } = getState();
        dispatch(toggleUpVoteCommentActionCreator({ commentId: commentId, userId: authUser.id }));

        try {
            await api.toggleUpVoteComment({ commentId: commentId, threadId: detailThread.id })
        } catch (error) {
            alert(error.message);
            dispatch(toggleUpVoteCommentActionCreator({ commentId: commentId, userId: authUser.id }))
        }
    }
}

