/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { asyncGetAllLeaderboards } from '../states/leaderboards/action';
import LeaderboardItem from '../components/leaderboard/LeaderboardItem';
import SpinnerPage from '../components/spinner/SpinnerPage';

import '../styles/pages/LeaderboardPage.css';

function LeaderboardPage({ t }) {
  const isLoading = useSelector((states) => states.isLoading);
  const leaderboards = useSelector((states) => states.leaderboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllLeaderboards());
  }, [dispatch]);

  return (
    <section className="leaderboard-page">
      {isLoading ? (
        <div className="leaderboard-page__loader">
          <SpinnerPage />
        </div>
      ) : (
        <div className="leaderboard-page__container">
          <Link to="/" className="leaderboard-page__back-btn">
            <FaArrowLeft className="back-icon" />
          </Link>
          <h3 className="leaderboard-page__title">{t('Leaderboard')}</h3>
          <div className="leaderboard__content-header">
            <p>{t('Users')}</p>
            <p>{t('Scores')}</p>
          </div>
          <div className="leaderboard__content-body">
            {leaderboards.map((item) => (
              <LeaderboardItem key={item.user.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

LeaderboardPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default LeaderboardPage;
