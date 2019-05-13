import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const reducerUser = state => state.get('currentUser');

export const getCurrentUser = () => createSelector(reducerUser, state => (state.get('info') || fromJS({})).toJS()) ;
