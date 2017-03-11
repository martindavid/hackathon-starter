import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from './containers/Login';
import App from './containers/App';
import Home from './containers/Home';
import AppComponent from './containers/AppComponent';

export default (
    <Route>
        <Route path="/login" component={Login} />
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/component" component={AppComponent} />
        </Route>
    </Route>
)