import httpClient from './../../utils/httpClient'
import {setNoMessage} from "./message";


export const USER_IN_WAITING = "GET_USER_IN_WAITING";
export const GET_USER = "GET_USER";
export const USERS = 'USERS';

/**
 * Call /User/userInWaiting Url, pour récupérer tous les utilisateurs en attente de validation
 * @returns {Function}
 */
export const fetchUserInValidation = () => {
    return dispatch => {
        httpClient.request({
            url: '/User/userInWaiting',
            method: 'GET',
        }).then(response => {
            dispatch(setUserInWaiting(response.data));
            dispatch(setNoMessage());
        })
    }
};

/**
 * Call /User/ValidateUserInWaiting, url pour accepter un utilisateur
 * @param id identifiant de l'utilisateur
 * @returns {Function}
 *
 */
export const fetchValidateUser = id => {
    return dispatch => {
        httpClient.request({
            url: `/User/ValidateUserInWaiting/${id}`,
            method: 'POST',
        }).then(() => {
            dispatch(fetchUserInValidation())
        })
    }
};

/**
 * Call /User/:id, Url pour supprimer un utilisateur
 * @param id identifiant de l'utilisateur
 * @return {Function}
 */
export const fetchDeleteUser = id => {
    return dispatch => {
        httpClient.request({
            url: `/User/RefuseUserInWaiting/${id}`,
            method: 'POST',
        }).then(() => {
            dispatch(fetchUserInValidation())
        })
    }
};

export const fetchUser = (id, callback) => {
    return dispatch => {
        httpClient.request({
            url: `/User/${id}`,
            method: 'GET',
        }).then(response => {
            dispatch(setUser(response.data));
            callback(response.data);
        })
    }
};

export const fetchNumberUserInWaiting = (callback) => {
    return dispatch => {
        httpClient.request({
            url: '/User/CountUserInWaiting'
        }).then(result => {
            callback(result.data)
        })
    }
};

export const fetchUsers = () => {
    return dispatch => {
        httpClient.request({
            url: '/User'
        }).then(result => {
            dispatch(setUsers(result.data))
        })
    }
};

export const setUserInWaiting = userInWaiting => {
    return {type: USER_IN_WAITING, userInWaiting};
};

export const setUser = user => {
    return {type: GET_USER, user}
};

export const setUsers = users => {
    return {type: USERS, users}
}