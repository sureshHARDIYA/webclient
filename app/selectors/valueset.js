import { fromJS } from "immutable";
import { createSelector } from "reselect";

export const reducerValueset = state => state.get("valueset");

export const getValueSetList = () =>
  createSelector(
    reducerValueset,
    state => (state.get("list") || fromJS([])).toJS()
  );

export const getLoaded = () =>
  createSelector(
    reducerValueset,
    state => state.get("isLoading") || false
  );

export const getCount = () =>
  createSelector(
    reducerValueset,
    state => state.get("total") || 0
  );

export const getTotalPage = () =>
  createSelector(
    reducerValueset,
    state => state.get("totalPage") || 0
  );

export const getCurrentPage = () =>
  createSelector(
    reducerValueset,
    state => state.get("page") || 0
  );

export const getPageSize = () =>
  createSelector(
    reducerValueset,
    state => state.get("pageSize") || 10
  );
