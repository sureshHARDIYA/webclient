import { fromJS } from 'immutable';
import Cookie from 'js-cookie';
import { createReducer } from 'reduxsauce';
import { LOGIN } from 'actions/constants';

export const INITIAL_STATE = fromJS({
  info: {
    token: Cookie.get('access_token')
  }
});

export const onRefreshSuccess = (state, { token }) => {
  Cookie.set('access_token', token, { expires: 7 });
  return state.set('info', fromJS({ token }));
}

export const ACTION_HANDLERS = {
  [LOGIN.REFRESH_SUCCESS]: onRefreshSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
