import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";

import app from "./app";
import patient from "./patient";
import currentUser from "./currentUser";
import organization from "./organization";
import patientSingle from "./patientSingle";
import organizationSingle from "./organizationSingle";

export default combineReducers({
  app,
  patient,
  currentUser,
  organization,
  patientSingle,
  organizationSingle,
  form: formReducer
});
