import httpClient from "../../utils/httpClient";

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

export const setLocations = locations => {
    return {type: LOCATIONS, locations}
};

export const setLocation = location => {
    return {type: LOCATION, location}
};