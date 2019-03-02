import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user'
import error from "./error";

const persistConfig = {
    key: 'auth',
    storage
};

const rootReducer = (history) => combineReducers({
    user: persistReducer(persistConfig, user),
    error: error,
    router: connectRouter(history)
});

export default rootReducer