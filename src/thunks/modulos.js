
import * as api from '../apis/genericAPI';
import * as action from '../actions/modulos';
import * as type from '../constants/modulos';
const BASE_URL = '/modulos';

export const moduloThunks = {
    getAll: () => dispatch => {
        dispatch({
            type: type.MODULO_ALL_REQUEST
        })
        api.getAllObjects(BASE_URL).then(result => {
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

