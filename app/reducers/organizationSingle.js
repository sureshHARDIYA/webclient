import { fromJS } from "immutable";
import { createReducer } from "reduxsauce";
import { ORGANIZATION } from "actions/constants";

export const INITIAL_STATE = fromJS({
  row: {},
  message: "",
  isLoading: false
});

export const onSingleRequest = state => state.set("isLoading", true);

export const onSingleFailure = state => state.set("isLoading", false);

export const onSingleSuccess = (state, action) =>
  state.set("isLoading", false).set("row", fromJS(action.entry));

export const ACTION_HANDLERS = {
  [ORGANIZATION.SINGLE_REQUEST]: onSingleRequest,
  [ORGANIZATION.SINGLE_FAILURE]: onSingleFailure,
  [ORGANIZATION.SINGLE_SUCCESS]: onSingleSuccess
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
