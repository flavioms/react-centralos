
import * as api from '../apis/genericAPI';
import * as action from '../actions/modulos';
import * as type from '../constants/modulos';
const ROTA = '/modulos';

export const moduloThunks = {
    getAll: () => (dispatch, getState) => {
        dispatch({
            type: type.MODULO_ALL_REQUEST
        })
        api.getAllObjects(getState().auth.token, ROTA).then(result => {
            if (result.error) {
                dispatch({
                    type: type.MODULO_ERROR,
                    payload: { result }
                })
            } else {
                dispatch(action.getAllModulos(result))
            }

        })
    }
}

