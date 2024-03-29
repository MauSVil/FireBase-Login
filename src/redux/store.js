import { createStore, combineReducers } from 'redux';
import reducersIndex from './reducers';

const reducers = combineReducers(reducersIndex);

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
