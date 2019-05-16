import httpClient from './../../utils/httpClient'
import {setMessage} from "./message";

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
            dispatch(setMessage({"Success" : ["Votre réservation a bien été pris en compte"]}))
        }).catch(() => {
            dispatch(setMessage({"Error" : ["Votre demande comporte des erreurs, veuillez vérifier vos données saisies"]}))
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
}

export const setUserLocation = location => {
    return {type: SET_USER_LOCATION, location}
};

export const setUserProfil = profil => {
    return {type: SET_USER_PROFIL, profil}
};

export const setNoProfil = () => {
    return {type: SET_NO_PROFIL}
};