import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const BASEURL = 'https://dkutwebapp.azurewebsites.net/api';

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

export function loginUser(creds) {
  return (dispatch) => {
    dispatch(receiveLogin());

    if (creds.email.length > 0 && creds.password.length > 0) {
      let data;

      axios({
        method: 'post',
        url: BASEURL + '/v1/auth/login/',
        data: {
          Email: creds.email,
          Password: creds.password,
        },
      }).then((res) => {
        localStorage.setItem('authenticated', true);
        console.log(res.data);
      });
    } else {
      dispatch(loginError('Something was wrong. Try again'));
    }
  };
}
