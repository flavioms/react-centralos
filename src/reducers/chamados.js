import * as type from '../constants/chamados';
const INITIAL_STATE = {
  lista: [],
  chamado: {
    status: '',
    titulo: '',
    categoria: '',
    modulo: '',
    totvs: '',
    setor: '',
    usuario: {
      nome: '',
      email: '',
      setor: '',
      ccusto: ''
    },
    problema: '',
    suporte: '',
    dtAbertura: '',
    dtEncerramento: '',
    timelapse: [],
    interacoes: []
  }
}
export default function chamados(state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.CHAMADO_ADD:
      return { ...state, success: action.payload }
    case type.CHAMADO_UPDATE:
      return { ...state, success: action.payload }
    case type.CHAMADO_DELETE:
      return { ...state, success: action.payload }
    case type.CHAMADO_DETAIL:
      return { ...state, chamado: action.payload.result[0] }
    case type.CHAMADO_ERROR:
      return { ...state, error: action.payload }
    case type.CHAMADO_ALL_REQUEST:
      return { ...state, loading: true }
    case type.CHAMADO_ALL_SUCCESS:
      return { ...state, loading: false, lista: action.payload, success: '', error: '' }
    case type.CHAMADO_ADD_INTERACT:
      return { ...state, chamado: action.payload.result, success: true }
    default:
      return state;
  }
}