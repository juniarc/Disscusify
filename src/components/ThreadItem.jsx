import React from 'react';
import { useNavigate } from 'react-router-dom';
import VoteBtns from './VoteBtns';
import CommentsBtn from './CommentsBtn';

function ThreadItem({
    id,
	title,
	category,
	body,
    createdAt,
	upVotesBy,
	downVotesBy,
	totalComments,
    upVote,
    downVote,
    neutraVote,
    authUser,
    user
}) {
    const navigate = useNavigate();

    const onThreadClick = () => {
        navigate(`/threads/${id}`)
    }

	return (
		<div className="thread-item" onClick={onThreadClick}>
			<p className="thread-item__title">{title}</p>
			<div className="thread-item__info">
                <div className="thread-item__left">
                    <div className="thread-item__left__img-container">
                        <img className='thread-item__left__img-user' src={user.avatar} alt={user.name} />
                    </div>
                    <div className="thread-item__left__text-container">
                        <p className="thread-item__left__name">{user.name}</p>
                        <p className='thread-item__left__date'>20 Hours Ago</p>
                    </div>
                </div>
                <div className="thread-item__right">
                    <p className="thread-item__category">{category}</p>
                </div>
            </div>
			<p className="thread-item__body">{body}</p>
			<div className="thread-item__bottom">
					<VoteBtns id={id} upVotesBy={upVotesBy} downVotesBy={downVotesBy} upVote={upVote} downVote={downVote} authUser={authUser} neutralVote={neutraVote}/>
					<CommentsBtn id={id} totalComments={totalComments} />
			</div>
		</div>
	);
}

export default ThreadItem;
