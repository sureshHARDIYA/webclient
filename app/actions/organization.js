import { ORGANIZATION } from "./constants";

export const onOrganizationRequest = (params = {}) => ({
  type: ORGANIZATION.SEARCH_REQUEST,
  ...params
});

export const onOrganizationFailure = (params = {}) => ({
  type: ORGANIZATION.SEARCH_FAILURE,
  ...params
});

export const onOrganizationSuccess = (params = {}) => ({
  type: ORGANIZATION.SEARCH_SUCCESS,
  ...params
});
