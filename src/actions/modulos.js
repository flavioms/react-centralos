import * as API from '../apis/genericAPI';
import * as type from '../constants/modulos';

const ROTA = '/modulos'

export function postModulo(modulo) {
  return (dispatch, getState) => {
    API.postObject(getState().auth.token, ROTA, modulo).then(result => {
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
  return (dispatch, getState) => {
    API.patchObject(getState().auth.token, ROTA, id, modulo).then(result => {
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
  return (dispatch, getState) => {
    API.deleteObject(getState().auth.token, ROTA, id).then(result => {
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
  return (dispatch, getState) => {
    API.getObject(getState().auth.token, ROTA, id).then(result => {
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