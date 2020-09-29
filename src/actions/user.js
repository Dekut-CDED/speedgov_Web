import axios from 'axios';
import { toast } from 'react-toastify';
import { BASEURL } from '../utils/constants'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

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

export const loginUser= (creds) => async(dispach) => {
    const body = JSON.stringify({Email: creds.email, Password: creds.password})

      console.log(body)
      const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${BASEURL}v1/auth/admins/login`, body, config)
      console.log(res)
      toast.success("You've been Loged In Successfully")
      localStorage.setItem('authenticated','true');
      dispach(receiveLogin())
    } catch (error) {

      toast.success(error)
    }
}
