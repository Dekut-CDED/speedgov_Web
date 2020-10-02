import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOAD_SUCCESS,
  LOAD_FAILED,
} from '../actions/user';

const authenticated = localStorage.getItem('authenticated');
export default function auth(
  state = {
    isFetching: false,
    isAuthenticated: authenticated,
    user: {},
  },
  action
) {
  switch (action.type) {
    case LOAD_SUCCESS:
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        ...action.payload,
        isAuthenticated: true,
        errorMessage: '',
      });
    case LOAD_FAILED:
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.payload,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    default:
      return state;
  }
}
