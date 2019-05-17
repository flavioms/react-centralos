import * as API from '../apis/genericAPI';
import * as type from '../constants/chamados';
import { push } from 'connected-react-router';

const ROTA = '/ticket'

export function postChamado(chamado) {
  return (dispatch, getState) => {
    API.postObject(getState().auth.token, ROTA, chamado).then(result => {
      if (!result.error) {
        dispatch(push(`/chamado/${result._id}`))
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
  return (dispatch, getState) => {
    API.patchObject(getState().auth.token, ROTA, id, chamado).then(result => {
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
  return (dispatch, getState) => {
    API.deleteObject(getState().auth.token, ROTA, id).then(result => {
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
  return (dispatch, getState) => {
    API.getObject(getState().auth.token, ROTA, id).then(result => {
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


export function postInteract(id, interacoes) {
  return (dispatch, getState) => {
    API.postInteract(getState().auth.token, ROTA, id, interacoes).then(result => {
      if (!result.error) {
        console.log('RETORNO DO BANCO: ', result)
        dispatch({
          type: type.CHAMADO_ADD_INTERACT,
          payload: { result }
        })
      } else {
        console.log('DEU RUIM: ', result)
        dispatch({
          type: type.CHAMADO_ERROR,
          payload: { result }
        })
      }
    })
  }
}
