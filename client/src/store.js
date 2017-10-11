import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const configureStore = (history) => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    const initialState = {};
    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./reducers', () => {
                store.replaceReducer(rootReducer);
            })
        }
    }

    return store;
}

export default configureStore;