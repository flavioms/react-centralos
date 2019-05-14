import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../routes/history';
import usuarios from './usuarios';
import chamados from './chamados';
import categorias from './categorias';
import modulos from './modulos';
import auth from './auth';

const rootReducers = combineReducers({
  router: connectRouter(history),
  usuarios,
  chamados,
  categorias,
  modulos,
  auth
})

export default rootReducers;