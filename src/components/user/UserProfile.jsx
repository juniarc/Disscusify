import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/components/UserProfile.css';

function UserProfile({ avatar, name, email }) {
  return (
    <section className="user-profile__container">
      <div className="user-profile__img-container">
        <img className="user-profile__img" src={avatar} alt={`${name} Avatar`} />
      </div>
      <div className="user-profile__text-container">
        <p className="user-profile__name">{name}</p>
        <p className="user-profile__email">{email}</p>
      </div>
    </section>
  );
}

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserProfile;
