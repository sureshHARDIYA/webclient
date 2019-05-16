import { takeLatest } from "redux-saga/effects";
import { PATIENT, ORGANIZATION } from "actions/constants";

import * as PATIENTWATCHER from "./patient";
import * as ORGANIZATIONWATCHER from "./organization";

export default function* root() {
  yield takeLatest(PATIENT.SEARCH_REQUEST, PATIENTWATCHER.onSearchRequest);
  yield takeLatest(
    ORGANIZATION.SEARCH_REQUEST,
    ORGANIZATIONWATCHER.onSearchRequest
  );
  yield takeLatest(
    ORGANIZATION.SINGLE_REQUEST,
    ORGANIZATIONWATCHER.onSingleRequest
  );
  yield takeLatest(PATIENT.SINGLE_REQUEST, PATIENTWATCHER.onSingleRequest);
}
