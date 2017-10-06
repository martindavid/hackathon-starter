import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';

export default function configureStore(history) {
    const initialState = {};
    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );

    return store;
}