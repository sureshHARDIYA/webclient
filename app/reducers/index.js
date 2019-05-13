import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import app from './app';
import patient from './patient';
import currentUser from './currentUser';

export default combineReducers({
  app,
  patient,
  currentUser,
  form: formReducer,
});
