import * as api from '../apis/genericAPI';
import * as action from '../actions/chamados';
import * as type from '../constants/chamados';
const ROTA = '/ticket';

export const chamadoThunks = {
    getAll: () => (dispatch, getState) => {
        dispatch({
            type: type.CHAMADO_ALL_REQUEST
        })
        api.getAllObjects(getState().auth.token, ROTA).then(result => {
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

