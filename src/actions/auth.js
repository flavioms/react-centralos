import * as API from '../apis/genericAPI';
import * as type from '../constants/auth';
import { push } from 'connected-react-router';
import jwtDecode from 'jwt-decode';

const ROTA = '/login'

export function login(usuario) {
    return dispatch => {
        API.postObject(null, ROTA, usuario).then(result => {
            if (!result.error) {
                localStorage.setItem('auth-token', result.token);
                localStorage.setItem('user-info', JSON.stringify(jwtDecode(result.token)))
                dispatch({type: type.AUTH_LOGIN, payload: result.token })
                dispatch(push(`/home`))
            } else {
                dispatch({
                    type: type.AUTH_ERROR,
                    payload: { result }
                })
            }
        })
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-info');
        dispatch(push(`/home`))
    }
}
