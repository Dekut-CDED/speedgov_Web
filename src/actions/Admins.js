import { toast } from 'react-toastify';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';
import {
  CLEAR_ADMINS,
  GETADMIN_FAILURE,
  GETADMIN_SUCCESS,
  LASTLOGIN_FAILURE,
  LASTLOGIN_SUCCESS,
} from './types.js';

export const GetCountofRegisteredAdmins = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/auth/admins/count`, config);
    dispatch({
      type: GETADMIN_SUCCESS,
      payload: { count: res.data.data },
    });
  } catch (error) {
    dispatch({ type: GETADMIN_FAILURE, payload: { errors: error } });
  }
};

export const GetAllAdmins = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/auth/admins/`, config);
    dispatch({
      type: GETADMIN_SUCCESS,
      payload: { admins: res.data.data },
    });
  } catch (error) {
    dispatch({ type: GETADMIN_FAILURE, payload: { errors: error } });
  }
};

export const UpdateAdminLastLogin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {};
  try {
    const res = await axios.put(
      `${BASEURL}v1/auth/admins/lastlogin`,
      body,
      config
    );
    dispatch({
      type: LASTLOGIN_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: LASTLOGIN_FAILURE, payload: { errors: error } });
  }
};

export const DeleteAdmin = (id) => async (dispatch) => {};

// TODO last login
// TODO Created on
