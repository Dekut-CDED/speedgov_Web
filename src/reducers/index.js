import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import users from './Users';
import request from './Request';

export default combineReducers({
  alerts,
  auth,
  navigation,
  users,
  request,
});
