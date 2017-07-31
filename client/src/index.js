import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import routes from './routes';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
