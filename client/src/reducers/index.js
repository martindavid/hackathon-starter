import { combineReducers } from 'redux';

import common from './common';
import login from './login';

const rootReducer = combineReducers({
    common,
    login
});

export default rootReducer;