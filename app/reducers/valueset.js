import { fromJS } from "immutable";
import { createReducer } from "reduxsauce";
import { VALUESET } from "actions/constants";

export const INITIAL_STATE = fromJS({
  list: [],
  message: "",
  total: 0,
  page: 0,
  pageSize: 0,
  totalPage: 0,
  isLoading: false
});

export const onSearchRequest = state => state.set("isLoading", true);

export const onSearchFailure = state => state.set("isLoading", false);

export const onSearchSuccess = (state, action) => {
  const { entry, total, page, pageSize, totalPage } = action;
  return state
    .set("isLoading", false)
    .set("page", page)
    .set("total", total)
    .set("pageSize", pageSize)
    .set("totalPage", totalPage)
    .set("list", fromJS(entry.map(({ resource }) => resource)));
};

export const ACTION_HANDLERS = {
  [VALUESET.SEARCH_REQUEST]: onSearchRequest,
  [VALUESET.SEARCH_FAILURE]: onSearchFailure,
  [VALUESET.SEARCH_SUCCESS]: onSearchSuccess
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
