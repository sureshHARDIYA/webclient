import { ORGANIZATION, ORGANIZATIONSINGLE } from "./constants";

export const onSearchRequest = (params = {}) => ({
  type: ORGANIZATION.ORGANIZATION_REQUEST,
  ...params
});

export const onSearchFailure = (params = {}) => ({
  type: ORGANIZATION.ORGANIZATION_FAILURE,
  ...params
});

export const onSearchSuccess = (params = {}) => ({
  type: ORGANIZATION.ORGANIZATION_SUCCESS,
  ...params
});

export const onRequestSingle = id => ({
  type: ORGANIZATIONSINGLE.SINGLE_ORGANIZATION_REQUEST,
  id
});

export const onRequestSingleFailure = (params = {}) => ({
  type: ORGANIZATIONSINGLE.SINGLE_ORGANIZATION_FAILURE,
  ...params
});

export const onRequestSingleSuccess = (params = {}) => ({
  type: ORGANIZATIONSINGLE.SINGLE_ORGANIZATION_SUCCESS,
  ...params
});
