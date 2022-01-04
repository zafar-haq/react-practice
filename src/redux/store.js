import { createStore, compose, applyMiddleware } from "redux";
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

// const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store