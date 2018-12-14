import {
  ON_CHANGE_OPEN_KEYS,
} from './constants';

export const onChangeOpenKeys = (payload = {}) => ({ type: ON_CHANGE_OPEN_KEYS, payload });
