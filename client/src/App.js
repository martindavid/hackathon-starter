import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import AppComponent from './containers/AppComponent';
import Login from './containers/Login';

import './index.css';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <div className="container main-content">
          <div className="row">
            <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/component" component={AppComponent} />
              <Route path="/login" component={Login} />
            </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App