import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import reducers from 'reducers';

export default (initialState = {}) => {
  const store = createStore(
    reducers,
    fromJS(initialState),
    applyMiddleware(thunk),
  );

  return store;
};
