import httpClient from './../../utils/httpClient';
import {setNoMessage} from "./message";

export const SET_DATAPAGE_USERINWAITING = 'SET_DATAPAGE_USERINWAITING';
export const SET_DATAPAGE_LISTVEHICLE = 'SET_DATAPAGE_LISTVEHICLE';
export const SET_DATAPAGE_DETAILVEHICLE = 'SET_DATAPAGE_DETAILVEHICLE';

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
 * Call /Vehicle/{i} Url, pour récupérer toutes les informations sur un vehicule donné
 * @returns {Function}
 */
export const fetchVehicleInfos = id => {
    return dispatch => {
        httpClient.request({
            url: `/Vehicle/${id}`,
            method: 'GET',
        }).then(response => {
           dispatch(setDetailVehicle(response.data));
            dispatch(setNoMessage());
        })
    }
};


/**
 * Call /Vehicle Url, pour récupérer tous les véhicules disponibles
 * @returns {Function}
 */
export const fetchVehicles = () => {
    return dispatch => {
        httpClient.request({
            url: '/Vehicle',
            method: 'GET',
        }).then(response => {
            dispatch(setListVehicle(response.data));
        })
    }
};

export const setUserInWaiting = users => {
    return {type: SET_DATAPAGE_USERINWAITING, users}
/**
 * Call /Pole Url, pour récupérer tous les poles disponibles
 * @returns {Function}
 */
export const fetchPoles = () => {
    return (dispatch, getState) => {

        let token = getState().auth.token;
        httpClient.request({
            url: '/Pole',
            method: 'GET',
            headers: { 'Authorization': `${token}` }
        }).then(response => {
            dispatch(clearDatapage());
            dispatch(setDatapage(response.data));
            dispatch(setNoMessage());
        })
    }
};

/**
 * Call /Pole/{i} Url, pour récupérer toutes les informations sur un pole donné
 * @returns {Function}
 */
export const fetchPoleInfos = () => {
    return (dispatch, getState) => {

        let token = getState().user.token;
        httpClient.request({
            url: '/Pole',
            method: 'GET',
            headers: { 'Authorization': `${token}` }
        }).then(response => {
            dispatch(setDatapage(response.data));
            dispatch(setNoMessage());
        })
    }
};

export const clearDatapage = () => {
    return {type: SET_CLEAR_DATAPAGE}
};

export const setListVehicle = vehicles => {
    return {type: SET_DATAPAGE_LISTVEHICLE, vehicles}
};

export const setDetailVehicle = detailVehicle => {
    return {type: SET_DATAPAGE_DETAILVEHICLE, detailVehicle}
};