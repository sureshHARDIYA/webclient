import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import {
  ON_CHANGE_OPEN_KEYS,
} from 'actions/constants';

const prefix = 'moment_';

export const INITIAL_STATE = fromJS({
  darkTheme: true,
  locationQuery: {},
  locationPathname: '',
  menuPopoverVisible: false,
  isNavbar: typeof document !== 'undefined' ? document.body.clientWidth < 769 : false,
  navOpenKeys: typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem(`${prefix}navOpenKeys`)) || [] : [],
  siderFold: typeof window !== 'undefined' ? window.localStorage.getItem(`${prefix}siderFold`) === 'true' : false,
});

export const onChangeOpenKeys = (state, { payload = {} }) => {
  if (typeof window === 'undefined') {
    return state;
  }

  window.localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(payload.navOpenKeys));
  return state.set('navOpenKeys', fromJS(payload.navOpenKeys));
};

export const ACTION_HANDLERS = {
  [ON_CHANGE_OPEN_KEYS]: onChangeOpenKeys,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
