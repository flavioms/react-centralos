import * as API from '../apis/UsuarioAPI'

export function postUsuario(usuario) {
  return dispatch => {
    API.postUsuario(usuario).then(result => {
      dispatch({
        type: 'USUARIO_ADD',
        payload: {
          result
        }
      })
    })
  }
}

export function patchUsuario(id, usuario) {
  return dispatch => {
    API.patchUsuario(id, usuario).then(result => {
      dispatch({
        type: 'USUARIO_UPDATE',
        payload: {
          result
        }
      })
    })
  }
}

export function deleteUsuario(id) {
  return dispatch => {
    API.patchUsuario(id).then(result => {
      dispatch({
        type: 'USUARIO_DELETE',
        payload: {
          result
        }
      })
    })
  }
}

export function getUsuario(id) {
  return dispatch => {
    API.getUsuario(id).then(result => {
      dispatch({
        type: 'USUARIO_DETAIL',
        payload: {
          usuario: result
        }
      })
    })
  }
}

