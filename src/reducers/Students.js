import {
  GETSTUDENTS_SUCCESS,
  GETSTUDENTS_FAILURE,
  CLEAR_STUDENTS,
} from '../actions/types';

const initialState = {
  students: null,
  count: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETSTUDENTS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case GETSTUDENTS_FAILURE:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_STUDENTS:
      return {
        students: null,
        count: null,
      };
    default:
      return state;
  }
}
