import * as type from '../constants/chamados';

export default function chamados(state = { lista: [] }, action) {
  switch (action.type) {
    case type.CHAMADO_ADD:
      return { ...state, success: action.payload }
    case type.CHAMADO_UPDATE:
      return { ...state, success: action.payload }
    case type.CHAMADO_DELETE:
      return { ...state, success: action.payload }
    case type.CHAMADO_DETAIL:
      return { ...state, chamado: action.payload }
    case type.CHAMADO_ERROR:
      return { ...state, error: action.payload }
    case type.CHAMADO_ALL_REQUEST:
      return { ...state, loading: true }
    case type.CHAMADO_ALL_SUCCESS:
      return { ...state, loading: false, lista: action.payload, success: '', error: '' }
    default:
      return state;
  }
}