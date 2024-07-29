import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import AddComment from './AddComment';

function CommentsSection({ authUser, comments, upVoteComment, downVoteComment, neutralVoteComment, addComment }) {
    return (
        <section className='comments-section'>
            <p className='comments-section__title'>Comments ({comments.length})</p>
            <AddComment {...authUser} addComment={addComment}/>
            <div className="comments-section__comment-list">
                {
                    comments.map((comment) => (
                        <CommentItem 
                            key={comment.id}
                            {...comment}
                            upVoteComment={upVoteComment}
                            downVoteComment={downVoteComment}
                            neutralVoteComment={neutralVoteComment}
                            authUser={authUser}
                        />
                    ))
                }
            </div>
        </section>
    )
}

CommentsSection.propTypes = {
    addComment: PropTypes.func.isRequired
}


export default CommentsSection;