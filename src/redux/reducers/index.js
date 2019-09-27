import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from './auth'
import message from "./message";
import user from './user';
import planning from './planning';
import location from './location';
import vehicule from "./vehicule";
import pole from './pole';

const persistConfig = {
    key: 'auth',
    storage
};

const rootReducer = (history) => combineReducers({
    auth: persistReducer(persistConfig, auth),
    message,
    user,
    planning,
    pole,
    location,
    vehicule,
    router: connectRouter(history)
});

export default rootReducer