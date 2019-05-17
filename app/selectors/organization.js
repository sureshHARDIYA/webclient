import { fromJS } from "immutable";
import { createSelector } from "reselect";

export const reducerUser = state => state.get("organization");

export const getOrganizationList = () =>
  createSelector(
    reducerUser,
    state => (state.get("list") || fromJS([])).toJS()
  );

export const getLoaded = () =>
  createSelector(
    reducerUser,
    state => state.get("isLoading") || false
  );

export const getCount = () =>
  createSelector(
    reducerUser,
    state => state.get("total") || 0
  );

export const getTotalPage = () =>
  createSelector(
    reducerUser,
    state => state.get("totalPage") || 0
  );

export const getCurrentPage = () =>
  createSelector(
    reducerUser,
    state => state.get("page") || 0
  );

export const getPageSize = () =>
  createSelector(
    reducerUser,
    state => state.get("pageSize") || 10
  );
