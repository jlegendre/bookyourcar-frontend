import httpClient from './../../utils/httpClient';
import {setMessage, setNoMessage} from "./message";

export const SET_DATAPAGE = 'SET_DATAPAGE';
export const SET_CLEAR_DATAPAGE = 'SET_CLEAR_DATAPAGE';


/**
 * Call /User/userInWaiting Url, pour récupérer tous les utilisateurs en attente de validation
 * @returns {Function}
 */
export const fetchUserInValidation = () => {
    return (dispatch, getState) => {

        let token = getState().auth.token;
        httpClient.request({
            url: '/User/userInWaiting',
            method: 'GET',
            headers: {'Authorization': `${token}`}
        }).then(response => {
            dispatch(clearDatapage());
            dispatch(setDatapage(response.data));
            dispatch(setNoMessage());
        })
    }
};


/**
 * Call /Vehicle/{i} Url, pour récupérer toutes les informations sur un vehicule donné
 * @returns {Function}
 */
export const fetchVehicleInfos = () => {
    return (dispatch, getState) => {

        let token = getState().user.token;
        httpClient.request({
            url: '/Vehicle',
            method: 'GET',
            headers: {'Authorization': `${token}`}
        }).then(response => {
            dispatch(setDatapage(response.data));
            dispatch(setNoMessage());
        })
    }
};


/**
 * Call /Vehicle Url, pour récupérer tous les véhicules disponibles
 * @returns {Function}
 */
export const fetchVehicles = () => {
    return (dispatch, getState) => {

        let token = getState().auth.token;
        httpClient.request({
            url: '/Vehicle',
            method: 'GET',
            headers: {'Authorization': `${token}`}
        }).then(response => {
            dispatch(clearDatapage());
            dispatch(setDatapage(response.data));
            dispatch(setNoMessage());
        })
    }
};

export const clearDatapage = () => {
    return {type: SET_CLEAR_DATAPAGE}
};

export const setDatapage = data => {

    return {type: SET_DATAPAGE, data}
};