import fetch from 'isomorphic-fetch'
import {getJson} from "../../utils/http";

import config from './../../config';

export const SET_USER_LOGIN = 'SET_USER_LOGIN';

/**
 * Appel l'api pokemon (exemple d'utilisation
 * @returns {Function}
 */
export const fetchLoginUser = () => {
    return (dispatch) => {
        //utilisation d'un site tierce pour bypasser le CORS de hytale .... (a ne pas faire)
        fetch(`${config.backend}/Auth/login`, {
            method: 'POST'
        }).then(
            response => getJson(response)
        ).then(json => {
            dispatch(setUser(json))
        })
    }
};

export const setUser = (user) => {
    return {type: SET_USER_LOGIN, user}
};