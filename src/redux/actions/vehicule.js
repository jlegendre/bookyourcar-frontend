import httpClient from "../../utils/httpClient";
import {setNoMessage} from "./message";

export const VEHICULES = "GET_VEHICULES";
export const VEHICULE = "GET_VEHICULE";

/**
 * Call /Pole Url, pour récupérer tous les poles disponibles
 * @returns {Function}
 */
export const fetchVehicules = () => dispatch => {
    httpClient.request({
        url: '/Vehicle',
        method: 'GET',
    }).then(response => {
        dispatch(setVehicules(response.data));
    })
};

/**
 * Call /Pole/{i} Url, pour récupérer toutes les informations sur un pole donné
 * @returns {Function}
 */
export const fetchVehicule = (id, callback) => dispatch => {
    httpClient.request({
        url: `/Vehicle/${id}`,
        method: 'GET',
    }).then(response => {
        dispatch(setVehicule(response.data));
        callback(response.data);
    })
};

/**
 * Call /Pole/{i} Url, pour modifier toutes les informations sur un pole donné
 * @returns {Function}
 */
export const fetchUpdateVehicule = (id, vehicule) => dispatch => {
    httpClient.request({
        url: `/Vehicle/${id}`,
        method: 'PUT',
        data: vehicule,
    }).then(() => {
        dispatch(fetchVehicules())
    })
};


/**
 * Call /Pole Url, pour ajouter un vehicule
 * @param vehicule nouveau objet a inserer en base
 * @param callback fonction qui contient true / false en fonction de la réussite de la requête
 * @returns {Function}
 */
export const fetchNewVehicule = (vehicule, callback) => dispatch => {
    httpClient.request({
        url: `/Vehicle`,
        method: 'POST',
        data: vehicule,
    }).then(() => {
        dispatch(fetchVehicules());
        dispatch(setNoMessage());
        callback(true);
    }).catch(() => {
        callback(false);
    })
};

/**
 * Call /Pole/:id, Url pour supprimer un pole
 * @param id identifiant du pole
 * @return {Function}
 */
export const fetchDeleteVehicule = id => {
    return dispatch => {
        httpClient.request({
            url: `/Vehicle/${id}`,
            method: 'DELETE',
        }).then(() => {
            dispatch(fetchVehicules())
        })
    }
};

export const setVehicules = vehicules => {
    return {type: VEHICULES, vehicules}
};

export const setVehicule = vehicle => {
    return {type: VEHICULE, vehicle}
};