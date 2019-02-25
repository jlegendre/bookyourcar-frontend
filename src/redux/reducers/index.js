import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user'

const persistConfig = {
    key: 'auth',
    storage
};

const rootReducer = (history) => combineReducers({
    user: persistReducer(persistConfig, user),
    router: connectRouter(history)
});

export default rootReducer