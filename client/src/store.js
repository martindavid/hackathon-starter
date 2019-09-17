import { routerMiddleware } from "connected-react-router";
import { createStore, compose, applyMiddleware } from "redux";
import createRootReducer from "redux/reducers";

const configureStore = history => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  const rootReducer = createRootReducer(history);
  const initialState = {};
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("redux/reducers", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;
