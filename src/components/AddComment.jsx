import React from "react";
import PropTypes from 'prop-types';
import CommentForm from "./CommentForm";


function AddComment({ avatar, name, addComment }) {
    return (
        <section className="add-comment">
            <div className="add-comment__img-container">
                <img src={avatar} alt={name} className="add-comment__img" />
            </div>
            <CommentForm addComment={addComment} />
        </section>
    )
}

AddComment.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default AddComment;