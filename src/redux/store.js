import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store