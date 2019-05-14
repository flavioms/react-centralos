import * as type from '../constants/modulos';
const INITIAL_STATE = {
  lista: [],
  modulo: {
    _id: '',
    sigla: '',
    nome: ''
  }
}
export default function modulos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.MODULO_ADD:
      return { ...state, success: action.payload }
    case type.MODULO_UPDATE:
      return { ...state, success: action.payload }
    case type.MODULO_DELETE:
      return { ...state, success: action.payload }
    case type.MODULO_DETAIL:
      return { ...state, modulo: action.payload.result[0] }
    case type.MODULO_ERROR:
      return { ...state, error: action.payload }
    case type.MODULO_ALL_REQUEST:
      return { ...state, loading: true }
    case type.MODULO_ALL_SUCCESS:
      return { ...state, loading: false, lista: action.payload, success: '', error: '' }
    default:
      return state;
  }
}