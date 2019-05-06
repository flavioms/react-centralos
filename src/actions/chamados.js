import * as API from '../apis/genericAPI';
import * as type from '../constants/chamados';
const BASE_URL = '/ticket'

export function postChamado(chamado) {
  return dispatch => {
    API.postObject(BASE_URL, chamado).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CHAMADO_ADD,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CHAMADO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function patchChamado(id, chamado) {
  return dispatch => {
    API.patchObject(BASE_URL, id, chamado).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CHAMADO_UPDATE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CHAMADO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function deleteChamado(id) {
  return dispatch => {
    API.deleteObject(BASE_URL, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CHAMADO_DELETE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CHAMADO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getChamado(id) {
  return dispatch => {
    API.getObject(BASE_URL, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CHAMADO_DETAIL,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CHAMADO_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getAllChamados(chamados) {
  return {
    type: type.CHAMADO_ALL_SUCCESS,
    payload: chamados
  }
}

