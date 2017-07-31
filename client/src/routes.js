import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import AppComponent from './containers/AppComponent';

export default (
    <Route>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/component" component={AppComponent} />
        </Route>
    </Route>
)
