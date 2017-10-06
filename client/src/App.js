import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'

import Header from './components/Header';
import Home from './containers/Home';
import AppComponent from './containers/AppComponent';

import './index.css';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/component" component={AppComponent} />
            </Switch>
            </div>
          </div>
        </div>
      </div>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App