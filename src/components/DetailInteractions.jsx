import React from "react";
import PropTypes from 'prop-types';
import VoteBtns from "./VoteBtns";
import CommentsSection from './CommentsSection'

function DetailInteractions({ id, upVotesBy, downVotesBy, authUser, upVote, downVote, neutralVote, comments, upVoteComment, downVoteComment, neutralVoteComment, addComment }) {	
    return (
        <div className="detail-page__interactions">
            <div className="detail-page__vote">
                <VoteBtns id={id} upVote={upVote} downVote={downVote} upVotesBy={upVotesBy} downVotesBy={downVotesBy} authUser={authUser} neutralVote={neutralVote}/>
            </div>
			<CommentsSection comments={comments} authUser={authUser} upVoteComment={upVoteComment} downVoteComment={downVoteComment} neutralVoteComment={neutralVoteComment} addComment={addComment}/>
		</div>
    )
}

DetailInteractions.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default DetailInteractions;