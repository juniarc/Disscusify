import React from 'react';
import PropTypes from 'prop-types';

import '../styles/pages/NotFoundPage.css';

function NotFoundPage({ t }) {
  return (
    <section className="not-found-page">
      <div className="not-found-page__text-container">
        <h1>404</h1>
        <h2>{t('Oops, Page not found')}</h2>
      </div>
    </section>
  );
}

NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default NotFoundPage;
