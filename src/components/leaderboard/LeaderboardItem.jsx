import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/LeaderboardItem.css';

function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item__left">
        <div className="leaderboard-item__img-container">
          <img src={user.avatar} alt={user.name} />
        </div>
        <p className="leaderboard-item__name">{user.name}</p>
      </div>
      <p className="leaderboard-item__right">{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
