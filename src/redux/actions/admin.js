import axios from 'axios';
import config from './../../config'
import {setMessage} from "./message";
import {fetchUserInValidation} from "./datapage";

/**
 * Call /User/ValidateUserInWaiting, url pour accepter un utilisateur
 * @param id identifiant de l'utilisateur
 * @returns {Function}
 *
 */
export const fetchValidateUser = id => {
    return (dispatch, getState) => {
        let token = getState().auth.token;

        let formData = new FormData();
        formData.set("id", id);

        axios.request({
            baseURL: config.backend,
            url: `/User/ValidateUserInWaiting`,
            method: 'PUT',
            headers: {'Authorization': `${token}`, 'Content-Type': 'multipart/form-data'},
            data: formData
        }).then(() => {
            dispatch(fetchUserInValidation())
        }).catch(err => {
            dispatch(setMessage(err.response.data));
        })
    }
};


/**
 * Call /User/:id, Url pour supprimer un utilisateur
 * @param id identifiant de l'utilisateur
 * @return {Function}
 */
export const fetchDeleteUser = id => {
    return (dispatch, getState) => {
        let token = getState().auth.token;
        axios.request({
            baseURL: config.backend,
            url: `/User/${id}`,
            method: 'DELETE',
            headers: {'Authorization': `${token}`}
        }).then(() => {
            dispatch(fetchUserInValidation())
        }).catch(err => {
            dispatch(setMessage(err.response.data));
        })
    }
};