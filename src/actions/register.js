import { toast } from 'react-toastify';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import { GetUsers } from '../actions/Users';
import { GetRequest } from '../actions/Request';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const confimed = 'REGISTER_FAILURE';

export function receiveRegister() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerError(payload) {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
}

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

    dispatch(GetUsers());
    dispatch(GetRequest());
    payload.history.push('/login');
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_FAILURE });
    toast.success('You Registration not Successful');
  }
};
