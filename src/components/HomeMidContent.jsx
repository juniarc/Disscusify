import React from 'react';
import ThreadItem from './ThreadItem';

function HomeMidContent({ threads, upVote, downVote, neutralVote, authUser }) {
    return (
        <article className="threads-list">
            {
                threads.map((thread) => (
                    <ThreadItem key={thread.id} {...thread} upVote={upVote} downVote={downVote} authUser={authUser} neutraVote={neutralVote}/>
                ))
            }
        </article>
    )
}

export default HomeMidContent;