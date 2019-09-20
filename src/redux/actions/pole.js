import httpClient from "../../utils/httpClient";
import {setNoMessage} from "./message";

export const POLES = "GET_POLES";
export const POLE = "GET_POLE";

/**
 * Call /Pole Url, pour récupérer tous les poles disponibles
 * @returns {Function}
 */
export const fetchPoles = () => dispatch => {
    httpClient.request({
        url: '/Pole',
        method: 'GET',
    }).then(response => {
        dispatch(setPoles(response.data));
    })
};

/**
 * Call /Pole/{i} Url, pour récupérer toutes les informations sur un pole donné
 * @returns {Function}
 */
export const fetchPole = id => dispatch => {
    httpClient.request({
        url: `/Pole/${id}`,
        method: 'GET',
    }).then(response => {
        dispatch(setPole(response.data));
    })
};

/**
 * Call /Pole/{i} Url, pour modifier toutes les informations sur un pole donné
 * @returns {Function}
 */
export const fetchUpdatePole = (id, pole) => dispatch => {
    httpClient.request({
        url: `/Pole/${id}`,
        method: 'PUT',
        data: pole,
    }).then(() => {
        dispatch(fetchPoles())
    })
};


/**
 * Call /Pole Url, pour ajouter un pole
 * @param pole nouveau objet a inserer en base
 * @param callback fonction qui contient true / false en fonction de la réussite de la requête
 * @returns {Function}
 */
export const fetchNewPole = (pole, callback) => dispatch => {
    httpClient.request({
        url: `/Pole`,
        method: 'POST',
        data: pole,
    }).then(() => {
        dispatch(fetchPoles());
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

export const setPoles = poles => {
    return {type: POLES, poles}
};

export const setPole = pole => {
    return {type: POLE, pole}
};