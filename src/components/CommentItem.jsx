import React from 'react';
import VoteBtns from './VoteBtns';
function CommentItem({ id, upVotesBy, downVotesBy, upVoteComment, downVoteComment, neutralVoteComment, content, owner, authUser }) {
    return (
        <div className="comment-item">
            <div className="comment-item__header">
                <div className="comment-item__header__left">
                    <div className="comment-item__header__left__img-container">
                        <img src={owner.avatar} alt={owner.name} className="comment-item__header__img" />
                    </div>
                    <p className='comment-item__header__left__name'>{owner.name}</p>
                </div>
                <p className="comment-item__header__right__date">20 Hours ago</p>
            </div>
            <p className="comment-item__body">{content}</p>
            <div className="comment-item__vote">
                <VoteBtns id={id} upVotesBy={upVotesBy} downVotesBy={downVotesBy} upVote={upVoteComment} downVote={downVoteComment} neutralVote={neutralVoteComment} authUser={authUser}/>
            </div>
        </div>
    )
}

export default CommentItem