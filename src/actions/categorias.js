import * as API from '../apis/genericAPI';
import * as type from '../constants/categorias';

const ROTA = '/categorias'

export function postCategoria(categoria) {
  return (dispatch, getState) => {
    API.postObject(getState().auth.token, ROTA, categoria).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CATEGORIA_ADD,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CATEGORIA_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function patchCategoria(id, categoria) {
  return (dispatch, getState) => {
    API.patchObject(getState().auth.token, ROTA, id, categoria).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CATEGORIA_UPDATE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CATEGORIA_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function deleteCategoria(id) {
  return (dispatch, getState) => {
    API.deleteObject(getState().auth.token, ROTA, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CATEGORIA_DELETE,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CATEGORIA_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getCategoria(id) {
  return (dispatch, getState) => {
    API.getObject(getState().auth.token, ROTA, id).then(result => {
      if (!result.error) {
        dispatch({
          type: type.CATEGORIA_DETAIL,
          payload: { result }
        })
      } else {
        dispatch({
          type: type.CATEGORIA_ERROR,
          payload: { result }
        })
      }
    })
  }
}

export function getAllCategorias(categorias) {
  return {
    type: type.CATEGORIA_ALL_SUCCESS,
    payload: categorias
  }
}