import { fromJS } from "immutable";
import { createSelector } from "reselect";

export const reducerQuestionnaire = state => state.get("questionnaireSingle");

export const getQuestionnaireDetail = () =>
  createSelector(
    reducerQuestionnaire,
    state => (state.get("row") || fromJS([])).toJS()
  );

export const getisLoading = () =>
  createSelector(
    reducerQuestionnaire,
    state => state.get("isLoading") || false
  );
