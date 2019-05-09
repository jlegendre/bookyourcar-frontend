import httpClient from './../../utils/httpClient'
import {fetchUserInValidation, fetchReservationInWaiting, fetchVehicleInfos} from "./datapage";


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
            url: `/User/${id}`,
            method: 'DELETE',
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
export const fetchDeleteReservation = id => {
    return dispatch => {
        httpClient.request({
            url: `/Reservation/${id}`,
            method: 'DELETE',
        }).then(() => {
            dispatch(fetchReservationInWaiting())
        })
    }
};

/**
 * Call /User/:id, Url pour supprimer un utilisateur
 * @param id identifiant de l'utilisateur
 * @return {Function}
 */
export const fetchValidateReservation = id => {
    return dispatch => {
        httpClient.request({
            url: `/Reservation/${id}`,
            method: 'POST',
        }).then(() => {
            dispatch(fetchReservationInWaiting())
        })
    }
};

export const fetchUpdateVehicle = ({vehId, vehRegistration, vehBrand, vehModel, vehKm, vehDatemec, vehTypeEssence, vehColor, vehNumberplace, vehIsactive, poleName}) => {
    return dispatch => {
        httpClient.request({
            url :`/Vehicle/${vehId}`,
            method: 'PUT',
            data: {vehId, vehRegistration, vehBrand, vehModel, vehKm, vehDatemec, vehTypeEssence, vehColor, vehNumberplace, vehIsactive, poleName}
        }).then(() => {
            dispatch(fetchVehicleInfos(vehId));
        })
    }
}

export const fetchDeleteVehicle = id => {
    return dispatch => {
        httpClient.request({
            url :`/Vehicle/${id}`,
            method: 'DELETE',
        }).then(() => {
            dispatch(fetchVehicleInfos(id));
        })
    }
}
