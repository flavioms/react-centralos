import * as API from '../apis/genericAPI';
import * as type from '../constants/categorias';

const BASE_URL = '/categorias'

export function postCategoria(categoria) {
  return dispatch => {
    API.postObject(BASE_URL, categoria).then(result => {
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
  return dispatch => {
    API.patchObject(BASE_URL, id, categoria).then(result => {
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
  return dispatch => {
    API.deleteObject(BASE_URL, id).then(result => {
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
  return dispatch => {
    API.getObject(BASE_URL, id).then(result => {
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