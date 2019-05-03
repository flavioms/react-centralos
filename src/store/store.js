import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import usuarios from './reducers/usuarios';
import rootSagas from './sagas/usuarios';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        usuarios
    }),
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas)

export default store;