import { PATIENT as TYPES } from "./constants";

export const onSearchRequest = (params = {}) => ({
  type: TYPES.SEARCH_REQUEST,
  ...params
});

export const onSearchFailure = (params = {}) => ({
  type: TYPES.SEARCH_FAILURE,
  ...params
});

export const onSearchSuccess = (params = {}) => ({
  type: TYPES.SEARCH_SUCCESS,
  ...params
});

export const onSingleRequest = (params = {}) => ({
  ...params,
  type: TYPES.SINGLE_REQUEST
});

export const onSingleSuccess = (params = {}) => ({
  ...params,
  type: TYPES.SINGLE_SUCCESS
});

export const onSingleFailure = (params = {}) => ({
  ...params,
  type: TYPES.SINGLE_FAILURE
});
