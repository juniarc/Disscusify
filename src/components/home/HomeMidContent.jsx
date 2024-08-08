import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ThreadItem, { threadItemShape } from '../thread/ThreadItem';
import SpinnerPage from '../spinner/SpinnerPage';

function HomeMidContent({ threads, upVote, downVote, neutralVote, t }) {
  const isLoading = useSelector((states) => states.isLoading);

  if (isLoading) {
    return (
      <div className="home-page__loader">
        <SpinnerPage />
      </div>
    );
  }

  if (threads.length === 0) {
    return (
      <h3 className="no-threads-text">
        {t('There is no thread, let\'s make a new thread')}
      </h3>
    );
  }
  return (
    <article className="threads-list">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neutralVote={neutralVote}
          t={t}
        />
      ))}
    </article>
  );
}

HomeMidContent.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default HomeMidContent;
