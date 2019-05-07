import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware} from 'connected-react-router';

import thunk from 'redux-thunk';
import rootReducers from './reducers';
import history from './routes/history';

const middlewares = [
    thunk,
    routerMiddleware(history)
]
const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;