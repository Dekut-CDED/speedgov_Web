import axios from 'axios';
import { toast } from 'react-toastify';
import { BASEURL } from '../utils/constants';
import { GetUsers } from '../actions/Users';
import { GetRequest } from '../actions/Request';
import setAuthToken from '../utils/setAuthToken';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILED = 'LOAD_FAILED';

export const LoadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/auth/me/`, config);
    dispatch({
      type: LOAD_SUCCESS,
      payload: { requests: res.data.data },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOAD_FAILED, payload: { errors: error } });
  }
};

export function receiveLogin() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('authenticated');
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  };
}

export const loginUser = (creds) => async (dispatch) => {
  const body = JSON.stringify({ Email: creds.email, Password: creds.password });

  console.log(body);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `${BASEURL}v1/auth/admins/login`,
      body,
      config
    );
    console.log(res);
    toast.success("You've been Loged In Successfully");
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('authenticated', 'true');
    dispatch(receiveLogin());
    dispatch(GetUsers());
    dispatch(GetRequest());
  } catch (error) {
    toast.success(error);
  }
};
