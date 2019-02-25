import fetch from 'isomorphic-fetch'

import config from './../../config';
import {getJson} from "../../utils/http";

export const SET_USER_USERNAME = 'SET_USER_USERNAME';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_EMPTY = 'SET_USER_EMPTY';

/**
 * Call /Auth/Login Url, pour connecter l'utilisateur
 * @param username username de l'utilisateur
 * @param password password de l'utilisateur
 * @returns {Function}
 */
export const fetchLoginUser = (username, password) => {
    return (dispatch) => {

        fetch(`${config.backend}/Auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: username, password}),
        }).then(
            response => getJson(response)
        ).then(json => {
            dispatch(setToken(json.token));
            dispatch(setUsername(username))

        })
    }
};

export const setUsername = (username) => {
    return {type: SET_USER_USERNAME, username}
};

export const setToken = (token) => {
    return {type: SET_USER_TOKEN, token}
};

export const setUserEmpty = () => {
    return {type: SET_USER_EMPTY}
};

