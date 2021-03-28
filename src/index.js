import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
atatus.config('37c2462244c9403c9d1d12c4f2de257b').install();
