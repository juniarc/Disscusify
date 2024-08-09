import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import App from './App';
import store from './states';

import './localization/i18n';
import './styles/global/global.css';

const root = createRoot(document.getElementById('root'));
Modal.setAppElement('#root');

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);
