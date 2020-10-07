import {
  GETLOCATIONS_SUCCESS,
  GETLOCATIONS_FAILURE,
  CLEAR_LOCATIONS,
} from '../actions/types';

const initialState = {
  locations: null,
  error: null,
  studentvios: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETLOCATIONS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case GETLOCATIONS_FAILURE:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_LOCATIONS:
      return {
        location: null,
      };
    default:
      return state;
  }
}
