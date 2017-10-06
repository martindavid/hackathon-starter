import React from 'react';
import { Switch, Route } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import AppComponent from './containers/AppComponent';

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/component" component={AppComponent} />
    </Switch>
)
