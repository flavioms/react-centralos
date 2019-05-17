import * as api from '../apis/genericAPI';
import * as action from '../actions/categorias';
import * as type from '../constants/categorias';
const ROTA = '/categorias';

export const categoriaThunks = {
    getAll: () => (dispatch, getState) => {
        dispatch({
            type: type.CATEGORIA_ALL_REQUEST
        })
        api.getAllObjects(getState().auth.token, ROTA).then(result => {
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

