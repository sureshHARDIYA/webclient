import { LOGIN } from './constants';

export const onRefreshSuccess = token => ({ type: LOGIN.REFRESH_SUCCESS, token });
