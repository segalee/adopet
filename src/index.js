import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store.js'

import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import { App } from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// serviceWorkerRegistration.unregister();


reportWebVitals();
