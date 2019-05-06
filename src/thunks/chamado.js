import * as api from '../apis/genericAPI';
import * as action from '../actions/chamados';
import * as type from '../constants/chamados';
const BASE_URL = '/ticket';

export const chamadoThunks = {
    getAll: () => dispatch => {
        dispatch({
            type: type.CHAMADO_ALL_REQUEST
        })
        api.getAllObjects(BASE_URL).then(result => {
            if (result.error) {
                dispatch({
                    type: type.CHAMADO_ERROR,
                    payload: { result }
                })
            } else {
                dispatch(action.getAllChamados(result))
            }

        })
    }
}

