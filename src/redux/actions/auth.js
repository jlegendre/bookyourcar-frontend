import httpClient from './../../utils/httpClient';
import {setNoMessage} from "./message";

export const SET_USER_USERNAME = 'SET_USER_USERNAME';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_EMPTY = 'SET_USER_EMPTY';
export const SET_USER_ROLE = 'SET_USER_ROLE';

/**
 * Call /Auth/login Url, pour connecter l'utilisateur
 * @param email username de l'utilisateur
 * @param password password de l'utilisateur
 * @returns {Function}
 */
export const fetchLoginUser = (email, password) => {
    return dispatch =>
        httpClient.request({
            url: '/Auth/login',
            method: 'POST',
            data: {email, password, rememberMe: true}
        }).then(response => {
            dispatch(setToken(response.data.token));
            dispatch(setUsername(email));
            dispatch(setNoMessage());
        }).then(() => {
            dispatch(fetchUserRole())
        });
};

/**
 * Call /Auth/register Url, pour enregistrer un nouveau utilisateur
 * @param email email de l'utilisateur
 * @param confirmPassword le mot de passe
 * @param password le mot de passe
 * @param success fonction a executer si la requêtes a bien fonctionné
 * @returns {Function}
 */
export const fetchRegisterUser = ({email, confirmPassword, password, name, firstName}, success) => {
    return dispatch => {
        httpClient.request({
            url: '/Auth/register',
            method: 'POST',
            data: {email, confirmPassword, password, name, firstName}
        }).then(() => {
            success()
        })
    }
};

/**
 * Call /User/userRole Url, pour récupérer le role d'un utilisateur connecté
 *
 * @return {Function}
 */
export const fetchUserRole = () => {
    return dispatch => {
        httpClient.request({
            url: '/User/userRole',
            method: 'GET',
        }).then(response => {
            dispatch(setUserRole(response.data.role))
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

export const setUserRole = role => {
    return {type: SET_USER_ROLE, role}
};