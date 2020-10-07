import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { BASEURL } from '../utils/constants';

import {
  GETLOCATIONS_SUCCESS,
  GETLOCATIONS_FAILURE,
  CLEAR_LOCATIONS,
} from './types';

export const GetAllLocationViolation = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/locations`, config);
    dispatch({
      type: GETLOCATIONS_SUCCESS,
      payload: { locations: res.data.data },
    });
  } catch (error) {
    dispatch({ type: GETLOCATIONS_FAILURE, payload: error });
  }
};
export const GetAStudentLocationById = (id) => async (dispatch) => {};

export const StreamLocationData = () => async (dispatch) => {};

export const GetSpecificStudentViolations = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/locations/${id}`, config);
    dispatch({
      type: GETLOCATIONS_SUCCESS,
      payload: { studentvios: res.data.location },
    });
  } catch (error) {
    dispatch({ type: GETLOCATIONS_FAILURE, payload: error });
  }
};
