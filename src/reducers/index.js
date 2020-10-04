import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import admins from './Admin';
import request from './Request';
import students from './Students';
import location from './Locations';

export default combineReducers({
  alerts,
  auth,
  navigation,
  admins,
  request,
  students,
  location,
});
