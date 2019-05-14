import * as api from '../apis/genericAPI';
import * as action from '../actions/categorias';
import * as type from '../constants/categorias';
const BASE_URL = '/categorias';

export const categoriaThunks = {
    getAll: () => dispatch => {
        dispatch({
            type: type.CATEGORIA_ALL_REQUEST
        })
        api.getAllObjects(BASE_URL).then(result => {
            if (result.error) {
                dispatch({
                    type: type.CATEGORIA_ERROR,
                    payload: { result }
                })
            } else {
                dispatch(action.getAllCategorias(result))
            }

        })
    }
}

