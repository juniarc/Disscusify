import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils/dateHelper';

import '../../styles/components/DetailHeader.css';

function DetailHeader({ title, createdAt, category, owner, t }) {
  const formatedDate = postedAt(createdAt, t);
  return (
    <div className="detail-page__header">
      <div className="detail-page__header__left">
        <div className="detail-page__header__left__left-side">
          <p className="detail-page__header__left__left-side__title">{title}</p>
          <p className="detail-page__header__left__left-side__category">
            {category}
          </p>
        </div>
        <p className="detail-page__header__left__date">{formatedDate}</p>
      </div>
      <div className="detail-page__header__right">
        <div className="detail-page__header__right__img-container">
          <img src={owner.avatar} alt={owner.name} />
        </div>
        <p className="detail-page__header__right__name">{owner.name}</p>
      </div>
    </div>
  );
}

DetailHeader.propTypes = {
  t: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  owner: PropTypes.object.isRequired,
};
export default DetailHeader;
