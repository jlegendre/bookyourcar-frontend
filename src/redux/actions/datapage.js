import config from './../../config';
import axios from 'axios';
import {setMessage, setNoMessage} from "./message";

export const SET_DATAPAGE = 'SET_DATAPAGE';


/**
 * Call /User/userInWaiting Url, pour récupérer tous les utilisateurs en attente de validation
 * @returns {Function}
 */
export const fetchUserInValidation = () => {
    return (dispatch, getState) => {

        let token = getState().user.token;
        axios.request({
            baseURL: config.backend,
            url: '/User/userInWaiting',
            method: 'GET',
            headers: {'Authorization': `${token}`}
        }).then(response => {
            dispatch(setDatapage(response.data));
            dispatch(setNoMessage());
        }).catch(err => {
            dispatch(setMessage(err.response.data));
        })
    }
};


/**
 * Call /Vehicule Url, pour récupérer tous les véhicules disponibles
 * @returns {Function}
 */
export const fetchVehicles = () => {
    return (dispatch, getState) => {

        let token = getState().user.token;
        axios.request({
            baseURL: config.backend,
            url: '/Vehicle',
            method: 'GET',
            headers: {'Authorization': `${token}`}
        }).then(response => {
            dispatch(setDatapage(response.data));
            dispatch(setNoMessage());
        }).catch(err => {
            dispatch(setMessage(err.response.data));
        })
    }
};

export const setDatapage = (data) => {
    return {type: SET_DATAPAGE, data}
};