import currentUser from 'services/currentUser';
import { LOGIN } from './constants';

export const onSubmitRequest = (params = {}) => dispatch => {
  dispatch({ type: LOGIN.SUBMITING_REQUEST, user: params });
  return currentUser.onLogin(params)
    .then((user) => dispatch(onSubmitSuccess(user)))
    .catch((error) => dispatch(onSubmitFailure(error.message)));
};

export const onSubmitFailure = (message) => ({ type: LOGIN.SUBMITING_FAILURE, message });

export const onSubmitSuccess = (user = {}) => ({ type: LOGIN.SUBMITING_SUCCESS, user });

export const onLogoutRequest = (message) => ({ type: LOGIN.LOGOUT_REQUEST, message });

export const onLogoutFailure = (message) => ({ type: LOGIN.LOGOUT_FAILURE, message });

export const onLogoutSuccess = () => ({ type: LOGIN.LOGOUT_SUCCESS });

export const onRefreshRequest = () => dispatch => {
  dispatch({ type: LOGIN.REFRESH_REQUEST });
  return currentUser.onLoad()
    .then((user) => dispatch(onRefreshSuccess(user)))
    .catch(() => dispatch(onRefreshFailure()));
};

export const onRefreshFailure = () => ({ type: LOGIN.REFRESH_FAILURE });

export const onRefreshSuccess = (user) => ({ type: LOGIN.REFRESH_SUCCESS, user });
