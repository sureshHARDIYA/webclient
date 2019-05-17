import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";

import app from "./app";
import patient from "./patient";
import currentUser from "./currentUser";
import organization from "./organization";
import questionnaire from './questionnaire';
import patientSingle from "./patientSingle";
import organizationSingle from "./organizationSingle";
import questionnaireSingle from './questionnaireSingle';

export default combineReducers({
  app,
  patient,
  currentUser,
  organization,
  questionnaire,
  patientSingle,
  organizationSingle,
  questionnaireSingle,
  form: formReducer
});
