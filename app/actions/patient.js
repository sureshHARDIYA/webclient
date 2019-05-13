import { PATIENT } from './constants';

export const onSearchRequest = (params = {}) => ({ type: PATIENT.SEARCH_REQUEST, ...params });

export const onSearchFailure = (params = {}) => ({ type: PATIENT.SEARCH_FAILURE, ...params });

export const onSearchSuccess = (params = {}) => ({ type: PATIENT.SEARCH_SUCCESS, ...params });
