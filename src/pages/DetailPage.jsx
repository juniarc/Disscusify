import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa'
import DetailHeader from '../components/DetailHeader';
import DetailInteractions from '../components/DetailInteractions';
import {
	asyncReceiveThreadDetail,
	asyncToggleUpVoteThreadDetail,
	asyncToggleDownVoteThreadDetail,
	asyncNeutralizeVoteThreadDetail,
	asyncToggleUpVoteComment,
	asyncToggleDownVoteComment,
	asyncNeutralizeVoteThreadComment,
	asyncAddComment,
} from '../states/threadDetail/action';

function DetailPage() {
	const { id } = useParams();
	const detailThread = useSelector((states) => states.detailThread);
	const authUser = useSelector((states) => states.authUser);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncReceiveThreadDetail(id));
	}, [id, dispatch]);

	const onThreadUpVote = () => {
		dispatch(asyncToggleUpVoteThreadDetail());
	};

	const onThreadDownVote = () => {
		dispatch(asyncToggleDownVoteThreadDetail());
	};

	const onThreadNeutralVote = () => {
		dispatch(asyncNeutralizeVoteThreadDetail())
	}

	const onCommenUpVote = (commentId) => {
		console.log('detailPage')
		dispatch(asyncToggleUpVoteComment(commentId));
	}

	const onCommentDownVote = (commetId) => {
		dispatch(asyncToggleDownVoteComment(commetId));
	}

	const onCommentNeutralVote = (commentId) => {
		dispatch(asyncNeutralizeVoteThreadComment(commentId));
	}

	const onSubmitComment = (content) => {
		dispatch(asyncAddComment({ content }))
	}

	if (!detailThread) {
		return null;
	}

	return (
		<section className="detail-page">
			<div className="detail-page__container">
				<Link to='/' className='detail-page__back-btn'><FaArrowLeft className='back-icon'/></Link>
				<DetailHeader {...detailThread} />
				<p className="detail-page__body">{detailThread.body}</p>
				<DetailInteractions
					{...detailThread}
					authUser={authUser}
					upVote={onThreadUpVote}
					downVote={onThreadDownVote}
					neutralVote={onThreadNeutralVote}
					upVoteComment={onCommenUpVote}
					downVoteComment={onCommentDownVote}
					neutralVoteComment={onCommentNeutralVote}
					addComment={onSubmitComment}
				/>
			</div>
		</section>
	);
}

export default DetailPage;
