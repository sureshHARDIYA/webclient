import { fromJS } from "immutable";
import { createSelector } from "reselect";

export const reducerOrganization = state => state.get("patientSingle");

export const getPatientDetail = () =>
  createSelector(
    reducerOrganization,
    state => (state.get("row") || fromJS([])).toJS()
  );

export const getisLoading = () =>
  createSelector(
    reducerOrganization,
    state => state.get("isLoading") || false
  );
