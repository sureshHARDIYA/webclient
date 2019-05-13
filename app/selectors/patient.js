import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const reducerUser = state => state.get('patient');

export const getPatientList = () => createSelector(reducerUser, state => (state.get('list') || fromJS([])).toJS());
