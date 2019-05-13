import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import { PATIENT } from 'actions/constants';

export const INITIAL_STATE = fromJS({
  list: [],
  message: '',
  isLoading: false,
});

export const onSearchRequest = (state) => state.set('isLoading', true);

export const onSearchFailure = (state) => state.set('isLoading', false);

export const onSearchSuccess = (state, { patients = [] }) => state.set('isLoading', false).set('list', fromJS(patients.map(({ resource }) => resource)));

export const ACTION_HANDLERS = {
  [PATIENT.SEARCH_REQUEST]: onSearchRequest,
  [PATIENT.SEARCH_FAILURE]: onSearchFailure,
  [PATIENT.SEARCH_SUCCESS]: onSearchSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
