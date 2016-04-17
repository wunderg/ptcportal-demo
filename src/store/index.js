import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import promise from 'redux-promise';
import slocal from '../reducers/students.local';
import sremote from '../reducers/students.remote';
import user from '../reducers/user.js';

const logger = createLogger();

const rootReducer = combineReducers({
  form: formReducer,
  slocal,
  sremote,
  user
});

const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunkMiddleware,
  logger
)(createStore);

export default function storeConfig(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
