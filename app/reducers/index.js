import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";

import app from "./app";
import patient from "./patient";
import valueset from "./valueset";
import currentUser from "./currentUser";
import organization from "./organization";
import questionnaire from "./questionnaire";
import patientSingle from "./patientSingle";
import valuesetSingle from "./valuesetSingle";
import organizationSingle from "./organizationSingle";
import questionnaireSingle from "./questionnaireSingle";

export default combineReducers({
  app,
  patient,
  valueset,
  currentUser,
  organization,
  questionnaire,
  patientSingle,
  valuesetSingle,
  organizationSingle,
  questionnaireSingle,
  form: formReducer
});
