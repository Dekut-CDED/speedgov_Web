import { toast } from 'react-toastify';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';
import {
  GETREQUEST_FAILURE,
  GETREQUEST_SUCCESS,
  APPROVEREQUEST_SUCCESS,
  APPROVEREQUEST_FAILURE,
} from './types.js';

export const GetAnauthorizedRequests = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.get(`${BASEURL}v1/requests/notapproved`, config);
    dispatch({
      type: GETREQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: GETREQUEST_FAILURE, payload: { errors: error } });
  }
};

export const GetApprovedRequests = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/requests/approved`, config);
    dispatch({
      type: GETREQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: GETREQUEST_FAILURE, payload: { errors: error } });
  }
};

export const approveRequest = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/requests/approve/${id}`, config);
    dispatch({
      type: APPROVEREQUEST_SUCCESS,
    });
    dispatch(GetAnauthorizedRequests());
  } catch (error) {
    dispatch({ type: APPROVEREQUEST_FAILURE, payload: { errors: error } });
  }
};

export const DeclineRequest = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/requests/approve/${id}`, config);
    dispatch({
      type: APPROVEREQUEST_SUCCESS,
    });
    dispatch(GetAnauthorizedRequests());
  } catch (error) {
    dispatch({ type: APPROVEREQUEST_FAILURE, payload: { errors: error } });
  }
};
