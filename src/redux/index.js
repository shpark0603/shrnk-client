import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

const middlewares = [composeWithDevTools()];

const store = createStore(rootReducer, ...middlewares);

export default store;
