import httpClient from './../../utils/httpClient'
import {setMessage, setNoMessageFor} from "./message";

export const SET_USER_LOCATION = 'SET_USER_LOCATION';
export const SET_USER_PROFIL = 'SET_USER_PROFIL';
export const SET_NO_PROFIL = 'SET_NO_PROFIL';

/**
 * Créer une noubelle réservation
 * @param input donnée a envoyer
 * @param success fonction en cas de succes
 * @return {Function}
 */
export const fetchNewLocation = (input, success) => {
    return dispatch => {
        httpClient.request({
            url: '/Location/AskLocation',
            method: 'POST',
            data: input
        }).then(() => {
            success && success();
            dispatch(setMessage({"Success" : ["Votre réservation a bien été prise en compte"]}))
        }).catch(() => {
            dispatch(setMessage({"Error" : ["Votre demande comporte des erreurs, veuillez vérifier les données saisies"]}))
        })
    }
};

/**
 * Retourne les location de l'utilisateur
 * @return {Function}
 */
export const fetchUserLocation = () => {
    return dispatch => {
        httpClient.request({
            url: '/Location',
            method: 'GET'
        }).then(response => {
            dispatch(setUserLocation(response.data))
        })
    }
};

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

export const setUserLocation = location => {
    return {type: SET_USER_LOCATION, location}
};

export const setUserProfil = profil => {
    return {type: SET_USER_PROFIL, profil}
};

export const setNoProfil = () => {
    return {type: SET_NO_PROFIL}
};