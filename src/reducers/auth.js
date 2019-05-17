import * as type from '../constants/auth';



export default function auth(state = {}, action) {
  switch (action.type) {
    case type.AUTH_LOGIN:
      return { ...state, token: action.payload }
    case type.AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}