import httpClient from './../../utils/httpClient'

export const GET_USER = "GET_USER";
export const USERS = 'USERS';

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
            dispatch(fetchUsers())
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
            dispatch(fetchUsers())
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

export const fetchNumberUser = (callback) => {
    return () => {
        httpClient.request({
            url: '/User/CountUserInWaitingAndLocationAsked'
        }).then(result => {
            callback(result.data)
        })
    }
};

export const fetchUsers = () => {
    return dispatch => {
        httpClient.request({
            url: '/User/GetUsers'
        }).then(result => {
            dispatch(setUsers(result.data))
        })
    }
};


export const setUser = user => {
    return {type: GET_USER, user}
};

export const setUsers = users => {
    return {type: USERS, users}
};