import { ORGANIZATION } from "./constants";

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
