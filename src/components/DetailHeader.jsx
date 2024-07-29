import React from 'react';

function DetailHeader({ title, category, owner }) {
	return (
		<div className="detail-page__header">
			<div className="detail-page__header__left">
				<div className="detail-page__header__left__left-side">
					<p className="detail-page__header__left__left-side__title">{title}</p>
					<p className="detail-page__header__left__left-side__category">
						{category}
					</p>
				</div>
				<p className="detail-page__header__left__date">20 Hours Ago</p>
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

export default DetailHeader;
