import * as type from '../constants/auth';



export default function auth(state = {admin: false}, action) {
  switch (action.type) {
    case type.AUTH_LOGIN:
      return { ...state, token: action.payload, admin: action.admin }
    case type.AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}