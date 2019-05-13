import { takeLatest } from 'redux-saga/effects'
import { PATIENT } from 'actions/constants';

import * as PATIENTWATCHER from './patient';

export default function* root() {
  yield takeLatest(PATIENT.SEARCH_REQUEST, PATIENTWATCHER.onSearchRequest);
}
