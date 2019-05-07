import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware} from 'connected-react-router';

import thunk from 'redux-thunk';
import rootReducers from './reducers';
import history from './routes/history';

const middlewares = [
    thunk,
    routerMiddleware(history)
]
const store = createStore(connectRouter(history)(rootReducers), applyMiddleware(...middlewares));

export default store;