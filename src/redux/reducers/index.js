import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from './auth'
import message from "./message";
import datapage from './datapage';
import user from './user';

const persistConfig = {
    key: 'auth',
    storage
};

const rootReducer = (history) => combineReducers({
    auth: persistReducer(persistConfig, auth),
    message,
    datapage,
    user,
    router: connectRouter(history)
});

export default rootReducer