import './index.module.scss';

import React from 'react';
import { render } from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);

// If you want to start measuring performance in your app:
reportWebVitals(console.log);

// Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept();
}
