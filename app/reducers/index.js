import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";

import app from "./app";
import patient from "./patient";
import currentUser from "./currentUser";
import organization from "./organization";

export default combineReducers({
  app,
  patient,
  currentUser,
  organization,
  form: formReducer
});
