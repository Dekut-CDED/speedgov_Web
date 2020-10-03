import axios from 'axios';
import { toast } from 'react-toastify';
import { BASEURL } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';
import {
  LOAD_SUCCESS,
  LOAD_FAILED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  CLEAR_REQUESTS,
  REGISTER_SUCCESS,
} from './types';
import { GetRequest } from './Request';
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
    const res = await axios.get(`${BASEURL}v1/auth/admins/me`, config);
    dispatch({
      type: LOAD_SUCCESS,
      payload: res.data.data,
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

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    localStorage.removeItem('authenticated');
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch({ type: CLEAR_REQUESTS });
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
    localStorage.setItem('authenticated', 'true');
    dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token } });
    dispatch(LoadUser());
    dispatch(GetRequest());
  } catch (error) {
    toast.success(error);
  }
};

export const registerUser = (payload) => async (dispatch) => {
  const body = JSON.stringify({
    Email: payload.creds.Email,
    Password: payload.creds.Password,
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(`${BASEURL}v1/auth/admins/`, body, config);
    toast.success(" You've been registered successfully");
    dispatch({ type: REGISTER_SUCCESS, payload: { token: res.data.token } });
    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('token', res.data.token);

    dispatch(LoadUser());
    dispatch(GetRequest());
    payload.history.push('/login');
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_FAILURE });
    toast.success('You Registration not Successful');
  }
};

export function registerError(erro) {
  alert('Register Failure');
  return {
    type: REGISTER_FAILURE,
    payload: erro,
  };
}
