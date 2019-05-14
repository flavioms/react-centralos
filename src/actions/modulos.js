import * as API from '../apis/genericAPI';
import * as type from '../constants/modulos';

const BASE_URL = '/modulos'

export function postModulo(modulo) {
  return dispatch => {
    API.postObject(BASE_URL, modulo).then(result => {
      if (!result.error) {
        dispatch({
          type: type.MODULO_ADD,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.MODULO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function patchModulo(id, modulo) {
  return dispatch => {
    API.patchObject(BASE_URL, id, modulo).then(result => {
      if (!result.error) {
        dispatch({
          type: type.MODULO_UPDATE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.MODULO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function deleteModulo(id) {
  return dispatch => {
    API.deleteObject(BASE_URL, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.MODULO_DELETE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.MODULO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getModulo(id) {
  return dispatch => {
    API.getObject(BASE_URL, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.MODULO_DETAIL,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.MODULO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getAllModulos(modulos) {
  return {
    type: type.MODULO_ALL_SUCCESS,
    payload: modulos
  }
}