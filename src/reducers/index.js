import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import register from './register';
import users from './Users';
import requests from './Request';

export default combineReducers({
  alerts,
  auth,
  navigation,
  register,
  users,
  requests,
});
