import httpClient from './../../utils/httpClient';
import {setMessage, setNoMessage, setNoMessageFor} from "./message";

export const SET_USER_USERNAME = 'SET_USER_USERNAME';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_EMPTY = 'SET_USER_EMPTY';
export const SET_USER_ROLE = 'SET_USER_ROLE';
export const GET_USER_PROFIL = "GET_USER_PROFIL";
export const SET_NO_PROFIL = 'SET_NO_PROFIL';

/**
 * Retourne le profil de l'utilisateur
 * @return {Function}
 */
export const fetchUserProfil = () => {
    return dispatch => {
        httpClient.request({
            url: '/User/UserInfos',
            method: 'GET'
        }).then(response => {
            dispatch(setUserProfil(response.data))
        })
    }
};

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
 * @param input formulaire
 * @param callback fonction a executer si la requêtes a bien fonctionné
 * @returns {Function}
 */
export const fetchRegisterUser = (input, callback) => () => {
    httpClient.request({
        url: '/Auth/register',
        method: 'POST',
        data: input
    }).then(() => callback())

};

/**
 * Call /Auth/PasswordForget url, pour envoyer une nouvelle demande de mot de passe oublié
 * @param input l'email a envoyer
 * @param callback fonction a exectuer si la reque^^e a bien fonctionné
 * @return {Function}
 */
export const fetchForgotPassword = (input, callback) => () => {
    httpClient.request({
        url: `/Auth/PasswordForget?emailDestinataire=${input}`,
        method: 'POST',
        data: {emailDestinataire: input}
    }).then(() => callback())

};

/**
 * Verifie le token
 * @param token le token
 * @param callback Action a exectuer en cas de réussite
 * @return {Function}
 */
export const fetchVerifToken = (token, callback) => () => {
    httpClient.request({
        url: `/Auth/VerifEmail/${token}`,
        method: 'GET'
    }).then(() => {
        callback && callback(true)
    }).catch(() => callback && callback(false))
};

/**
 * Envoie le nouveau mot de passe au server
 * @param input les données a envoyer
 * @param token le token
 * @param callback la fonction a exectuer en cas de réussiteÒ
 * @return {Function}
 */
export const fetchSaveChangePassword = (input, token, callback) => () => {
    httpClient.request({
        url: `Auth/SaveChangePassword`,
        method: 'POST',
        data: input,
        headers: {"Authorization": token}
    }).then(() => callback())
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

/**
 * Modifie les informations de l'utilisateur
 * @param user modification a modifier
 * @return {Function}
 */
export const fetchUpdateProfil = (user) => {
    return dispatch => {
        httpClient.request({
            url: '/User/EditInfoUser',
            method: 'POST',
            data: user
        }).then(() => {
            dispatch(fetchUserProfil())
        })
    }
};

export const fetchUpdatePassword = (password, success) => {
    return (dispatch, getState) => {
        if(password.password !== password.passwordConfirmation) {
            dispatch(setMessage({"Error": ["Les mots de passe sont différents"]}));
            success(false);
        } else {
            httpClient.request({
                url: '/Auth/login',
                method: 'POST',
                data: {email: getState().auth.username, password: password.oldPassword, rememberMe: false}
            }).then(() => {
                dispatch(setNoMessageFor("OldPassword"));
                httpClient.request({
                    url: '/Auth/SaveChangePassword',
                    method: 'POST',
                    data: {password: password.password, passwordConfirmation: password.passwordConfirmation}
                }).then(() => {
                    dispatch(setMessage({"Success" : ["Mot de passe modifié"]}));
                    success(true);
                }).catch(() => {
                    success(false);
                })
            }).catch(() => {
                dispatch(setMessage({"OldPassword": ["Ancien mot de passe incorrect"]}));
                success(false);
            })
        }
    }
};

export const setUsername = username => {
    return {type: SET_USER_USERNAME, username}
};

export const setToken = token => {
    return {type: SET_USER_TOKEN, token}
};

export const setAuthEmpty = () => {
    return {type: SET_USER_EMPTY}
};

export const setUserRole = role => {
    return {type: SET_USER_ROLE, role}
};

export const setUserProfil = profil => {
    return {type: GET_USER_PROFIL, profil}
};