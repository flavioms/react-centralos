import * as type from '../constants/usuarios';

export default function usuarios(state = { lista: [] }, action) {
  switch (action.type) {
    case type.USUARIO_ADD:
      return { ...state, success: action.payload }
    case type.USUARIO_UPDATE:
      return { ...state, success: action.payload }
    case type.USUARIO_DELETE:
      return { ...state, success: action.payload }
    case type.USUARIO_DETAIL:
      return { ...state, usuario: action.payload }
    case type.USUARIO_ERROR:
      return { ...state, error: action.payload }
    case type.USUARIO_ALL_REQUEST:
      return { ...state, loading: true }
    case type.USUARIO_ALL_SUCCESS:
      return { ...state, loading: false, lista: action.payload, success: '', error: '' }
    default:
      return state;
  }
}