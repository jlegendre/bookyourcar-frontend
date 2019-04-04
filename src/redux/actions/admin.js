import axios from 'axios';
import config from './../../config'
import {setMessage} from "./message";

/**
 * Call /User/ValidateUserInWaiting, url pour accepter un utilisateur
 * @param id identifiant de l'utilisateur
 * @returns {Function}
 *
 */
export const fetchValidateUser = id => {
    return (dispatch, getState) => {
        let token = getState().auth.token;
        axios.request({
            baseURL: config.backend,
            url: `/User/ValidateUserInWaiting/${id}`,
            method: 'POST',
            headers: {'Authorization': `${token}`}
        }).catch(err => {
            dispatch(setMessage(err.response.data));
        })
    }
};
