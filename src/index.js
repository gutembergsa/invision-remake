import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './sw/serviceWorker';

import App from './app-code/App';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
