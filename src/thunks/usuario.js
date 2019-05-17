import * as api from '../apis/genericAPI';
import * as action from '../actions/usuarios';
import * as type from '../constants/usuarios';
const ROTA = '/users'

export const usuarioThunks = {
    getAll: () => (dispatch, getState) => {
        dispatch({
            type: type.USUARIO_ALL_REQUEST
        })
        api.getAllObjects(getState().auth.token, ROTA).then(result => {
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

