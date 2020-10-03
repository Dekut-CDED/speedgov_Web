import { toast } from 'react-toastify';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';
import { GETREQUEST_FAILURE, GETREQUEST_SUCCESS } from './types.js';

export const GetRequest = () => async (dispatch) => {
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
      type: GETREQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: GETREQUEST_FAILURE, payload: { errors: error } });
  }
};
