/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from 'html-react-parser';
import { FaArrowLeft } from 'react-icons/fa';
import DetailHeader from '../components/detail/DetailHeader';
import DetailInteractions from '../components/detail/DetailInteractions';
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
import SpinnerPage from '../components/spinner/SpinnerPage';

import '../styles/pages/DetailPage.css';

function DetailPage({ t }) {
  const { id } = useParams();
  const detailThread = useSelector((states) => states.detailThread);
  const authUser = useSelector((states) => states.authUser);
  const isLoading = useSelector((states) => states.isLoading);

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
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommenUpVote = (commentId) => {
    dispatch(asyncToggleUpVoteComment(commentId));
  };

  const onCommentDownVote = (commetId) => {
    dispatch(asyncToggleDownVoteComment(commetId));
  };

  const onCommentNeutralVote = (commentId) => {
    dispatch(asyncNeutralizeVoteThreadComment(commentId));
  };

  const onSubmitComment = (content) => {
    dispatch(asyncAddComment({ content }));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      {isLoading ? (
        <div className="detail-page__loader">
          <SpinnerPage />
        </div>
      ) : (
        <div className="detail-page__container">
          <Link to="/" className="detail-page__back-btn">
            <FaArrowLeft className="back-icon" />
          </Link>
          <DetailHeader {...detailThread} t={t} />
          <p className="detail-page__body">{parse(detailThread.body)}</p>
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
            t={t}
          />
        </div>
      )}
    </section>
  );
}

DetailPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default DetailPage;
