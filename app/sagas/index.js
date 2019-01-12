import { takeLatest } from 'redux-saga/effects'
import { LOGIN } from 'actions/constants';

import * as LOGINWATCHER from './login';

export default function* root() {
  yield takeLatest(LOGIN.REFRESH_REQUEST, LOGINWATCHER.onRefreshRequest);
  yield takeLatest(LOGIN.SUBMITING_REQUEST, LOGINWATCHER.onSubmitRequest);
  yield takeLatest(LOGIN.LOGOUT_REQUEST, LOGINWATCHER.onLogoutRequest);
}
