import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevtools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';

const enhancer = composeWithDevtools(
  applyMiddleware(thunk, logger())
);

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
