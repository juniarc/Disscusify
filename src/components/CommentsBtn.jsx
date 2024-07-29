import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa';

function CommentsBtn({ id, totalComments}) {
    const navigate = useNavigate();

    const onCommentClick = () => {
		console.log(id)
        navigate(`/threads/${id}`)
    }

	return (
		<button className="comments__btn" onClick={onCommentClick}>
			<FaCommentDots className="comment-icon" />
			<p className="comments__number">{totalComments}</p>
		</button>
	);
}

export default CommentsBtn;
