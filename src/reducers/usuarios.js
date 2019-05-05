export default function usuarios(state = {}, action){
  switch (action.type) {
    case 'USUARIO_ADD':
      return{...state, success: action.payload.result}
    case 'USUARIO_UPDATE':
      return{...state, success: action.payload.result}
    case 'USUARIO_DELETE':
      return{...state, success: action.payload.result}
    case 'USUARIO_DETAIL':
      return{...state, usuario: action.payload.usuario}
    case 'USUARIO_ALL_REQUEST':
      return{...state, loading: true}
    case 'USUARIO_ALL_SUCCESS':
      return{...state, loading: false,  usuarios: action.payload.usuarios}
    default:
      return state;
  }
}