import { createStore, compose, applyMiddleware } from "redux";
import tron from "../config/reactotron";
import createSagaMiddleware from 'redux-saga';

import reducers from "./ducks";
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware( { sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    tron.createEnhancer()
  )
);

sagaMiddleware.run(sagas);

export default store;
