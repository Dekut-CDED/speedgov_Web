import {
  GETREQUEST_SUCCESS,
  GETREQUEST_FAILURE,
  CLEAR_REQUESTS,
  APPROVEREQUEST_SUCCESS,
  APPROVEREQUEST_FAILURE,
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
    case APPROVEREQUEST_FAILURE:
    case APPROVEREQUEST_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
