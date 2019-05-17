import { takeLatest } from "redux-saga/effects";
import { PATIENT, ORGANIZATION, QUESTIONNAIRE } from "actions/constants";

import * as PATIENTWATCHER from "./patient";
import * as ORGANIZATIONWATCHER from "./organization";
import * as QUESTIONNAIREWATCHER from './questionnaire';

export default function* root() {
  yield takeLatest(
    ORGANIZATION.SEARCH_REQUEST,
    ORGANIZATIONWATCHER.onSearchRequest
  );
  yield takeLatest(
    ORGANIZATION.SINGLE_REQUEST,
    ORGANIZATIONWATCHER.onSingleRequest
  );

  yield takeLatest(PATIENT.SEARCH_REQUEST, PATIENTWATCHER.onSearchRequest);
  yield takeLatest(PATIENT.SINGLE_REQUEST, PATIENTWATCHER.onSingleRequest);
  yield takeLatest(QUESTIONNAIRE.SEARCH_REQUEST, QUESTIONNAIREWATCHER.onSearchRequest);
  yield takeLatest(QUESTIONNAIRE.SINGLE_REQUEST, QUESTIONNAIREWATCHER.onSingleRequest);
}
