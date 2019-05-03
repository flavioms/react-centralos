import { takeLatest, put, call } from 'redux-saga/effects';
function apiGet() {
   return fetch(`http://localhost:5000/users`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('auth-token')
      }
    }).then(response => {
      return response.json()
    })
  }

function* getUsuarioList() {
    try {
        const response = yield call(apiGet);
        yield put({ type: 'SUCCESS_USUARIO_LIST', payload: { data: response } });
    } catch (err) {
        yield put({ type: 'FAILURE_USUARIO_LIST' });
    }
}

export default function* root() {
    yield [
        takeLatest('REQUEST_USUARIO_LIST', getUsuarioList),
    ];
}