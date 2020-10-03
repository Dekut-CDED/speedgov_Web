import {
  GETREQUEST_SUCCESS,
  GETREQUEST_FAILURE,
  CLEAR_REQUESTS,
} from '../actions/types';

const initialState = {
  requests: null,
  error: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETREQUEST_SUCCESS:
      return {
        ...state,
        requests: payload,
        loading: false,
      };
    case GETREQUEST_FAILURE:
      return {
        ...state,
        error: payload,
        loading: true,
      };
    case CLEAR_REQUESTS:
      return {
        ...state,
        requests: null,
        loading: false,
      };
    default:
      return state;
  }
}
