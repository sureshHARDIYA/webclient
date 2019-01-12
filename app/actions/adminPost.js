import { ADMINPOST } from './constants';

export const onCreateRequest = (params = {}) => ({ type: ADMINPOST.CREATE_REQUEST, post: params });

export const onCreateFailure = (message) => ({ type: ADMINPOST.CREATE_FAILURE, message });

export const onCreateSuccess = (post = {}) => ({ type: ADMINPOST.CREATE_SUCCESS, post });
