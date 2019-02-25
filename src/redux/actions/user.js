import fetch from 'isomorphic-fetch'

import config from './../../config';

export const SET_USER_USERNAME = 'SET_USER_USERNAME';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';

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
            body: {email: username, password},
        }).then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            return response.json()
        }).then(json => {
            dispatch(setToken(json))
        })
    }
};

export const setUsername = (username) => {
    return {type: SET_USER_USERNAME, username}
};

export const setToken = (token) => {
    return {type: SET_USER_USERNAME, token}
}