import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentForm({ addComment }) {
    const [comment, setComment] = useState('');

    function onCommentSubmit() {
        if (comment.trim()) {
            addComment({comment});
            setComment('')
        }
    }


    function handlerContentChange({ target }) {
        setComment(target.value)
    }

    return (
        <>
            <textarea type="text" className='comment-input' placeholder='Add a comment' value={comment} onChange={handlerContentChange} />
            <button type='button' className='comment-submit' onClick={onCommentSubmit}>Comment</button>
        </>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default CommentForm;