import * as type from '../constants/categorias';
const INITIAL_STATE = {
  lista: [],
  categoria: {
    _id: '',
    nome: '',
    sla: ''
  }
}
export default function categorias(state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.CATEGORIA_ADD:
      return { ...state, success: action.payload }
    case type.CATEGORIA_UPDATE:
      return { ...state, success: action.payload }
    case type.CATEGORIA_DELETE:
      return { ...state, success: action.payload }
    case type.CATEGORIA_DETAIL:
      return { ...state, categoria: action.payload.result[0] }
    case type.CATEGORIA_ERROR:
      return { ...state, error: action.payload }
    case type.CATEGORIA_ALL_REQUEST:
      return { ...state, loading: true }
    case type.CATEGORIA_ALL_SUCCESS:
      return { ...state, loading: false, lista: action.payload, success: '', error: '' }
    default:
      return state;
  }
}