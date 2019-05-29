import { takeLatest } from "redux-saga/effects";
import {
  PATIENT,
  VALUESET,
  ORGANIZATION,
  QUESTIONNAIRE
} from "actions/constants";

import * as PATIENTWATCHER from "./patient";
import * as ORGANIZATIONWATCHER from "./organization";
import * as QUESTIONNAIREWATCHER from "./questionnaire";
import * as VALUESETWATCHER from "./valueset";

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
  yield takeLatest(VALUESET.SEARCH_REQUEST, VALUESETWATCHER.onSearchRequest);
  yield takeLatest(VALUESET.SINGLE_REQUEST, VALUESETWATCHER.onSingleRequest);
  yield takeLatest(
    QUESTIONNAIRE.SEARCH_REQUEST,
    QUESTIONNAIREWATCHER.onSearchRequest
  );
  yield takeLatest(
    QUESTIONNAIRE.SINGLE_REQUEST,
    QUESTIONNAIREWATCHER.onSingleRequest
  );
}
