import { ORGANIZATION as TYPES } from "./constants";

export const onSearchRequest = (params = {}) => ({
  ...params,
  type: TYPES.SEARCH_REQUEST,
});

export const onSearchSuccess = (params = {}) => ({
  ...params,
  type: TYPES.SEARCH_SUCCESS,
});

export const onSearchFailure = (params = {}) => ({
  ...params,
  type: TYPES.SEARCH_FAILURE,
});

export const onSingleRequest = (params = {}) => ({
  ...params,
  type: TYPES.SINGLE_REQUEST,
});

export const onSingleSuccess = (params = {}) => ({
  ...params,
  type: TYPES.SINGLE_SUCCESS,
});

export const onSingleFailure = (params = {}) => ({
  ...params,
  type: TYPES.SINGLE_FAILURE,
});
