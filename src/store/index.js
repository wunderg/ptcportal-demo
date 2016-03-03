import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import main from '../reducers/main';

const logger = createLogger();

const rootReducer = combineReducers({
  main
});
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promise,
  logger
)(createStore);

export default function storeConfig(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
