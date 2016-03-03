import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import todos from '../reducers/todos';
import visible from '../reducers/visible';

const logger = createLogger();

const rootReducer = combineReducers({
  todos,
  visible
});
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promise,
  logger
)(createStore);

export default function storeConfig(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
