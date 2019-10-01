import httpClient from "../../utils/httpClient";
import {setMessage} from "./message";
import {fetchUserProfil} from "./auth";

export const LOCATIONS = "GET_LOCATIONS";
export const LOCATION = "GET_LOCATION";


/**
 * Retourne les location de l'utilisateur
 * @return {Function}
 */
export const fetchLocations = () => {
    return dispatch => {
        httpClient.request({
            url: '/Location',
            method: 'GET'
        }).then(response => {
            dispatch(setLocations(response.data))
        })
    }
};


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
            dispatch(setMessage({"Success": ["Votre réservation a bien été prise en compte"]}))
            dispatch(fetchUserProfil())
        }).catch(() => {
            dispatch(setMessage({"Error": ["Votre demande comporte des erreurs, veuillez vérifier les données saisies"]}))
        })
    }
};


/**
 * Retourne les locations pour la partie admin
 * @returns {Function}
 */
export const fetchLocationAdmin = () => {
    return dispatch => {
        httpClient.request({
            url: 'Location/ManageLocations',
            method: 'GET'
        }).then(response => {
            dispatch(setLocations(response.data))
        })
    }
};

/**
 * Retourne la location a partir d'un identifiant
 * @param id l'identifiant
 * @param callback fonction a executer en reotur
 * @returns {Function}
 */
export const fetchLocation = (id, callback) => {
    return dispatch => {
        httpClient.request({
            url: `/Location/${id}`,
            method: 'GET',
        }).then(response => {
            dispatch(setLocation(response.data));
            callback && callback(response.data);
        })
    }
};

export const updateFetchLocation = (locationId, vehicleid, action) => {
    let body;
    if(vehicleid == null){
        body = {action: action}
    } else {
        body = {vehicleId: vehicleid, action: action}
    }
    return dispatch => {

        httpClient.request({
            url: `/Location/${locationId}`,
            method: 'PUT',
            data: body
        }).then(() => {
            dispatch(fetchLocationAdmin());
        });
    }
};

export const setLocations = locations => {
    return {type: LOCATIONS, locations}
};

export const setLocation = location => {
    return {type: LOCATION, location}
};
