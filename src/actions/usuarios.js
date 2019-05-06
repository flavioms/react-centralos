import * as API from '../apis/genericAPI';
import * as type from '../constants/usuarios';
const BASE_URL = '/users'

export function postUsuario(usuario) {
  return dispatch => {
    API.postObject(BASE_URL, usuario).then(result => {
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
  return dispatch => {
    API.patchObject(BASE_URL, id, usuario).then(result => {
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
  return dispatch => {
    API.deleteObject(BASE_URL, id).then(result => {
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
  return dispatch => {
    API.getObject(BASE_URL, id).then(result => {
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

