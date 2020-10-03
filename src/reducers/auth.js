import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOAD_SUCCESS,
  LOAD_FAILED,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../actions/types';

const authenticated = localStorage.getItem('authenticated');

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: authenticated,
  loading: true,
  isFetching: false,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        isFetching: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        isFetching: false,
      };
    // @ts-ignore
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case LOGOUT_SUCCESS:
    case LOAD_FAILED:
      localStorage.removeItem('token');
      localStorage.removeItem('authenticated');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        isFetching: false,
      };
    default:
      return state;
  }
}
