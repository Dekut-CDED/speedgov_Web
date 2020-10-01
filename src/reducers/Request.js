import { GETUSER_SUCCESS, GETUSER_FAILURE } from '../actions/Users';

const initialState = {
  requests: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETUSER_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case GETUSER_FAILURE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
