import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store';
import './index.css';
import routes from './routes';
import 'font-awesome/css/font-awesome.css';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        { routes }
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
