import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
	switch (action.type) {
		case ActionType.RECEIVE_THREAD_DETAIL:
			return action.payload.detailThread;
		case ActionType.CLEAR_THREAD_DETAIL:
			return null;
		case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL:
			return {
				...detailThread,
				upVotesBy: detailThread.upVotesBy.concat(action.payload.userId),
			};
		case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL:
			return {
				...detailThread,
				downVotesBy: detailThread.downVotesBy.concat(action.payload.userId),
			};
		case ActionType.TOGGLE_NEUTRALIZE_THREAD_DETAIL:
			return {
				...detailThread,
				upVotesBy: detailThread.upVotesBy.filter(
					(id) => id !== action.payload.userId,
				),
				downVotesBy: detailThread.downVotesBy.filter(
					(id) => id !== action.payload.userId,
				),
			};
		case ActionType.TOGGLE_UPVOTE_COMMENT:
			return {
				...detailThread,
				comments: detailThread.comments.map((comment) => {
					if (comment.id === action.payload.commentId) {
						return {
							...comment,
							upVotesBy: comment.upVotesBy.concat(action.payload.userId),
						};
					}
					return comment;
				}),
			};
		case ActionType.TOGGLE_DOWNVOTE_COMMENT:
			return {
				...detailThread,
				comments: detailThread.comments.map((comment) => {
					if (comment.id === action.payload.commentId) {
						return {
							...comment,
							downVotesBy: comment.downVotesBy.concat(action.payload.userId),
						};
					}
					return comment;
				}),
			}
		case ActionType.TOGGLE_NEUTRALIZE_COMMENT:
			return {
				...detailThread,
				comments: detailThread.comments.map((comment) => {
					if (comment.id === action.payload.commentId) {
						return {
							...comment,
							upVotesBy: comment.upVotesBy.filter(
								(id) => id !== action.payload.userId,
							),
							downVotesBy: comment.downVotesBy.filter(
								(id) => id !== action.payload.userId,
							),
						};
					}
					return comment;
				}),
			}
		case ActionType.ADD_COMMENT:
			console.log('reducer' + action.payload.comment)
			return {
				...detailThread,
				comments: detailThread.comments.concat([action.payload.comment])
			}
		default:
			return detailThread;
	}
}

export default threadDetailReducer;
