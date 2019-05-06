import * as api from '../apis/genericAPI';
import * as action from '../actions/usuarios';
import * as type from '../constants/usuarios';
const BASE_URL = '/users'

export const usuarioThunks = {
    getAll: () => dispatch => {
        dispatch({
            type: type.USUARIO_ALL_REQUEST
        })
        api.getAllObjects(BASE_URL).then(result => {
            if (result.error) {
                dispatch({
                    type: type.USUARIO_ERROR,
                    payload: { result }
                })
            } else {
                dispatch(action.getAllUsuarios(result))
            }

        })
    }
}

