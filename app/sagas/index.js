import { takeLatest } from "redux-saga/effects";
import { PATIENT, ORGANIZATION, ORGANIZATIONSINGLE } from "actions/constants";

import * as PATIENTWATCHER from "./patient";
import * as ORGANIZATIONWATCHER from "./organization";

export default function* root() {
  yield takeLatest(PATIENT.SEARCH_REQUEST, PATIENTWATCHER.onSearchRequest);
  yield takeLatest(
    ORGANIZATION.ORGANIZATION_REQUEST,
    ORGANIZATIONWATCHER.onSearchRequest
  );
  yield takeLatest(
    ORGANIZATIONSINGLE.SINGLE_ORGANIZATION_REQUEST,
    ORGANIZATIONWATCHER.onRequestSingle
  );
}
