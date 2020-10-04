import { toast } from 'react-toastify';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';
import { GETSTUDENTS_FAILURE, GETSTUDENTS_SUCCESS } from './types.js';

export const GetCountofRegisteredUsers = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/auth/users/count`, config);
    dispatch({
      type: GETSTUDENTS_SUCCESS,
      payload: { count: res.data },
    });
  } catch (error) {
    dispatch({ type: GETSTUDENTS_FAILURE, payload: { error: error } });
  }
};

export const GetAllStudents = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/auth/users`, config);
    dispatch({
      type: GETSTUDENTS_SUCCESS,
      payload: { students: res.data.data },
    });
  } catch (error) {
    dispatch({ type: GETSTUDENTS_FAILURE, payload: { error: error } });
  }
};

// TODO
export const getviolationsPerStuden = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(
      `${BASEURL}v1/requests?select=requestName,locationName`,
      config
    );
    dispatch({
      type: GETSTUDENTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: GETSTUDENTS_FAILURE, payload: { errors: error } });
  }
};

// TODO
export const GetStudentViolators = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(
      `${BASEURL}v1/requests?select=requestName,locationName`,
      config
    );
    dispatch({
      type: GETSTUDENTS_SUCCESS,
      payload: { students: res.data.data },
    });
  } catch (error) {
    dispatch({ type: GETSTUDENTS_FAILURE, payload: { error: error } });
  }
};
