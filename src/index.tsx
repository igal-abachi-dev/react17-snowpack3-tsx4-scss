 import React from 'react';
 import { render } from 'react-dom';

 import App from './App';
 import './index.module.scss';

render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root'),
 );

// Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept();
}
