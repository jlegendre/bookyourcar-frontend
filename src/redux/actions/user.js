import axios from 'axios';

import config from './../../config';
import {setError, setNoError} from "./error";

export const SET_USER_USERNAME = 'SET_USER_USERNAME';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_EMPTY = 'SET_USER_EMPTY';

/**
 * Call /Auth/login Url, pour connecter l'utilisateur
 * @param email username de l'utilisateur
 * @param password password de l'utilisateur
 * @returns {Function}
 */
export const fetchLoginUser = (email, password) => {
    return dispatch =>
        axios.request({
            baseURL: config.backend,
            url: '/Auth/login',
            method: 'POST',
            data: {email, password}
        }).then(response => {
            dispatch(setToken(response.data.token));
            dispatch(setUsername(email));
            dispatch(setNoError());
        }).catch(err => {
            dispatch(setError(err.description));
        })
};

/**
 * Call /Auth/register Url, pour enregistrer un nouveau utilisateur
 * @param email email de l'utilisateur
 * @param confirmPassword le mot de passe
 * @param password le mot de passe
 * @returns {Function}
 */
export const fetchRegisterUser = (email, confirmPassword, password) => {
    return dispatch => {
        axios.request({
            baseURL: config.backend,
            url: '/Auth/register',
            method: 'POST',
            data: {email, confirmPassword, password}
        }).then(() => {
            dispatch(fetchLoginUser(email, password))
        })
    }
};

export const setUsername = username => {
    return {type: SET_USER_USERNAME, username}
};

export const setToken = token => {
    return {type: SET_USER_TOKEN, token}
};

export const setUserEmpty = () => {
    return {type: SET_USER_EMPTY}
};

