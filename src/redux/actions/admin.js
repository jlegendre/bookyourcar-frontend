import httpClient from './../../utils/httpClient'
import {fetchUserInValidation, fetchReservationInWaiting, fetchVehicleInfos, fetchPoles} from "./datapage";


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
 * Call /Pole/:id, Url pour supprimer un pole
 * @param id identifiant du pole
 * @return {Function}
 */
export const fetchDeletePole = id => {
    return dispatch => {
        httpClient.request({
            url: `/Pole/${id}`,
            method: 'DELETE',
        }).then(() => {
            dispatch(fetchPoles())
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
            url: `/Location/${id}`,
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
            url: `/Location/${id}`,
            method: 'POST',
        }).then(() => {
            dispatch(fetchReservationInWaiting())
        })
    }
};



/**
 * Call /Vehicle/:id, Url pour modifier un v�hicule
 * @param vehId identifiant du v�hicule
 * @return {Function}
 */
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
/**
 * Call /Vehicle/:id, Url pour supprimer un vehicule
 * @param id identifiant du vehicule
 * @return {Function}
 */
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

/**
 * Call /Vehicle/, Url pour créer un vehicule
 * @return {Function}
 */
export const fetchCreateVehicle = ({vehId, vehRegistration, vehBrand, vehModel, vehKm, vehDatemec, vehTypeEssence, vehColor, vehNumberplace, vehIsactive, poleName}) => {
    return dispatch => {
        httpClient.request({
            url :`/Vehicle`,
            method: 'POST',
            data: {vehId, vehRegistration, vehBrand, vehModel, vehKm, vehDatemec, vehTypeEssence, vehColor, vehNumberplace, vehIsactive, poleName}
        }).then(() => {
        })
    }
}
