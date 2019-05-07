import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../routes/history';
import usuarios from './usuarios'
import chamados from './chamados'

const rootReducers = combineReducers({
  router: connectRouter(history),
  usuarios,
  chamados
})

export default rootReducers;