import { toast } from 'react-toastify';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';

export const GETREQUEST_SUCCESS = 'REGISTER_SUCCESS';
export const GETREQUEST_FAILURE = 'REGISTER_FAILURE';

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
    const res = await axios.get(`${BASEURL}v1/requests/`, config);
    dispatch({
      type: GETREQUEST_SUCCESS,
      payload: { requests: res.data.data },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: GETREQUEST_FAILURE, payload: { errors: error } });
  }
};
