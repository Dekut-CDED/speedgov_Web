import { toast } from 'react-toastify';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';

import { GETUSER_SUCCESS, GETUSER_FAILURE } from './types';

export const GetUsers = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`${BASEURL}v1/auth/users/`, config);
    dispatch({ type: GETUSER_SUCCESS, payload: { users: res.data.data } });
  } catch (error) {
    console.log(error);
    dispatch({ type: GETUSER_FAILURE, payload: { errors: error } });
  }
};
