/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import UserProfile from '../user/UserProfile';
import UsersItem, { userItemShape } from '../user/UsersItem';

function HomeRightContent({ authUser, users, t }) {
  const MAX_LENGTH = 20;
  const slicedUsers = users.slice(0, MAX_LENGTH);

  return (
    <section className="home-right-content">
      <UserProfile {...authUser} />
      <div className="user-list">
        <p className="user-list__title">
          {t('Active Users')}
          (
          {
              users.length
              }
          )
        </p>
        <div className="user-list__container">
          {slicedUsers.map((user) => (
            <UsersItem key={user.id} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
}

HomeRightContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  authUser: PropTypes.object.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape(userItemShape)).isRequired,
  t: PropTypes.func.isRequired,
};

export default HomeRightContent;
