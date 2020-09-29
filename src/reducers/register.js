import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from '../actions/register';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isFetching: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isFetching: false,
        loading: false,
      };
    case REGISTER_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isFetching: true,
        loading: false,
      };
    default:
      return state;
  }
}

// export default function register(state = initialState, action) {
//     switch (action.type) {
//         case REGISTER_REQUEST:
//             return Object.assign({}, state, {
//                 isFetching: true,
//             });
//         case REGISTER_SUCCESS:
//             return Object.assign({}, state, {
//                 isFetching: false,
//                 errorMessage: '',
//             });
//         case REGISTER_FAILURE:
//             return Object.assign({}, state, {
//                 isFetching: false,
//                 errorMessage: action.payload,
//             });
//         default:
//             return state; 
//     }
// }
