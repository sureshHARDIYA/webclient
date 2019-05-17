import { fromJS } from "immutable";
import { createSelector } from "reselect";

export const reducerQuestionnaire = state => state.get("questionnaire");

export const getQuestionnaireList = () =>
  createSelector(
    reducerQuestionnaire,
    state => (state.get("list") || fromJS([])).toJS()
  );

export const getLoaded = () =>
  createSelector(
    reducerQuestionnaire,
    state => state.get("isLoading") || false
  );

export const getCount = () =>
  createSelector(
    reducerQuestionnaire,
    state => state.get("total") || 0
  );

export const getTotalPage = () =>
  createSelector(
    reducerQuestionnaire,
    state => state.get("totalPage") || 0
  );

export const getCurrentPage = () =>
  createSelector(
    reducerQuestionnaire,
    state => state.get("page") || 0
  );

export const getPageSize = () =>
  createSelector(
    reducerQuestionnaire,
    state => state.get("pageSize") || 10
  );
