import { fromJS } from 'immutable';
import { persistState } from 'redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default (initialState = {}) => {
  const store = createStore(
    reducers,
    fromJS(initialState),
    enhancer,
  );

  if (module.hot) {
    module.hot.accept('../', () => store.replaceReducer(require('../').default));
  }

  return store;
};
