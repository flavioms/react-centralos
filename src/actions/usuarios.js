import * as API from '../apis/genericAPI';
import * as type from '../constants/usuarios';
const ROTA = '/users'

export function postUsuario(usuario) {
  return (dispatch, getState) => {
    API.postObject(getState().auth.token, ROTA, usuario).then(result => {
      if (!result.error) {
        dispatch({
          type: type.USUARIO_ADD,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.USUARIO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function patchUsuario(id, usuario) {
  return (dispatch, getState) => {
    API.patchObject(getState().auth.token, ROTA, id, usuario).then(result => {
      if (!result.error) {
        dispatch({
          type: type.USUARIO_UPDATE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.USUARIO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function deleteUsuario(id) {
  return (dispatch, getState) => {
    API.deleteObject(getState().auth.token, ROTA, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.USUARIO_DELETE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.USUARIO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getUsuario(id) {
  return (dispatch, getState) => {
    API.getObject(getState().auth.token, ROTA, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.USUARIO_DETAIL,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.USUARIO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getAllUsuarios(usuarios) {
  return {
    type: type.USUARIO_ALL_SUCCESS,
    payload: usuarios
  }
}

