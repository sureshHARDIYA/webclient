import { fromJS } from "immutable";
import { createSelector } from "reselect";

export const reducerQuestionnaire = state => state.get("valuesetSingle");

export const getValueSetDetail = () =>
  createSelector(
    reducerQuestionnaire,
    state => (state.get("row") || fromJS([])).toJS()
  );

export const getisLoading = () =>
  createSelector(
    reducerQuestionnaire,
    state => state.get("isLoading") || false
  );
