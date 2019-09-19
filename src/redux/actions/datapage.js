import httpClient from './../../utils/httpClient';
import {setNoMessage} from "./message";

export const SET_DATAPAGE_USERINWAITING = 'SET_DATAPAGE_USERINWAITING';
export const SET_DATAPAGE_LISTVEHICLE = 'SET_DATAPAGE_LISTVEHICLE';
export const SET_DATAPAGE_DETAILVEHICLE = 'SET_DATAPAGE_DETAILVEHICLE';
export const SET_DATAPAGE_LITVEHICLEAVAILABLE = 'SET_DATAPAGE_VEHICULE_AVAILABLE';
export const SET_DATAPAGE_RESERVATIONINWAITING = 'SET_DATAPAGE_RESERVATIONINWAITING';
export const SET_DATAPAGE_DETAILLOCATION = 'SET_DATAPAGE_DETAILLOCATION';
export const SET_PLANNING = 'SET_PLANNING';
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
export const fetchVehicleInfos = (id, success) => {
    return dispatch => {
        httpClient.request({
            url: `/Vehicle/${id}`,
            method: 'GET',
        }).then(response => {
            dispatch(setDetailVehicle(response.data));
            dispatch(setNoMessage());
            success && success(response.data);
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

export const fetchGetLocation = (id, success) => {
    return dispatch => {
        httpClient.request({
            url: `/Location/${id}`,
            method: 'GET',
        }).then(response => {
            dispatch(setLocationDetail(response.data));
            success && success(response.data);
        })
    }
};

export const setUserInWaiting = users => {
    return {type: SET_DATAPAGE_USERINWAITING, users}
};

export const setListVehicle = vehicles => {
    return {type: SET_DATAPAGE_LISTVEHICLE, vehicles}
};

export const setDetailVehicle = detailVehicle => {
    return {type: SET_DATAPAGE_DETAILVEHICLE, detailVehicle}
};

export const setReservationInWaiting = reservations => {
    return {type: SET_DATAPAGE_RESERVATIONINWAITING, reservations}
};

export const setLocationDetail = location => {
    return {type: SET_DATAPAGE_DETAILLOCATION, location}
};

export const setPlanning = planning => {
    return {type: SET_PLANNING, planning}
};