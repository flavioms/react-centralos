import { combineReducers } from 'redux';
import usuarios from './usuarios'
import chamados from './chamados'

const rootReducers = combineReducers({
  usuarios,
  chamados
})

export default rootReducers;