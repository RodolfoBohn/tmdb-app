import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from './sagas'

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = () => {
  const sagaMiddleWare = createSagaMiddleware()
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleWare]));

  store.sagaTask = sagaMiddleWare.run(rootSaga)

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
