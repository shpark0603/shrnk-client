import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './auth';
import publicURL from './publicURL';

const rootReducer = combineReducers({
  auth,
  publicURL,
});

const middlewares = [composeWithDevTools()];

const store = createStore(rootReducer, ...middlewares);

export default store;
