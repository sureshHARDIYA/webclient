import Post from 'services/post';
import { ADMINPOST } from './constants';

export const onCreateRequest = (params = {}) => dispatch => {
  dispatch({ type: ADMINPOST.CREATE_REQUEST, post: params });

  return Post.onCreate(params)
    .then((post) => dispatch(onCreateSuccess(post)))
    .catch((error) => dispatch(onCreateFailure(error.message)));
};

export const onCreateFailure = (message) => ({ type: ADMINPOST.CREATE_FAILURE, message });

export const onCreateSuccess = (post = {}) => ({ type: ADMINPOST.CREATE_SUCCESS, post });
