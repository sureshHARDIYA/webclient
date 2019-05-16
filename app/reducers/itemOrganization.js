import { fromJS } from "immutable";
import { createReducer } from "reduxsauce";
import { ORGANIZATIONSINGLE } from "actions/constants";

export const INITIAL_STATE = fromJS({
  row: {},
  message: "",
  isLoading: false
});

export const onRequestSingle = state => state.set("isLoading", true);

export const onRequestSingleFailure = state => state.set("isLoading", false);

export const onRequestSingleSuccess = (state, action) => {
  console.log("testing", action);

  const { entry } = action;
  return state
    .set("isLoading", false)
    .set("row", fromJS(entry.map(({ resource }) => resource)));
};

export const ACTION_HANDLERS = {
  [ORGANIZATIONSINGLE.SINGLE_ORGANIZATION_REQUEST]: onRequestSingle,
  [ORGANIZATIONSINGLE.SINGLE_ORGANIZATION_FAILURE]: onRequestSingleFailure,
  [ORGANIZATIONSINGLE.SINGLE_ORGANIZATION_SUCCESS]: onRequestSingleSuccess
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
