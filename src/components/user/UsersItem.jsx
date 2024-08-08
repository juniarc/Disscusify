import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/components/UsersItem.css';

function UsersItem({ name, avatar }) {
  return (
    <div className="users-item__container">
      <div className="users-item__img-container">
        <img src={avatar} alt={`${name} Avatar`} />
      </div>
      <p className="users-item__name">{name}</p>
    </div>
  );
}

const userItemShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

UsersItem.propTypes = {
  ...userItemShape,
};

export { userItemShape };

export default UsersItem;
