import {
  GETADMIN_SUCCESS,
  GETADMIN_FAILURE,
  LASTLOGIN_SUCCESS,
  LASTLOGIN_FAILURE,
} from '../actions/types';

const initialState = {
  admins: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETADMIN_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case LASTLOGIN_FAILURE:
    case GETADMIN_FAILURE:
      return {
        ...state,
        ...payload,
      };
    case LASTLOGIN_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
