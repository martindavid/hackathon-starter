import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import 'font-awesome/css/font-awesome.css';
import configureStore from './store';

import App from './App';
import './index.css';

const history = createBrowserHistory();
const store = configureStore(history);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root'), // eslint-disable-line no-undef
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
