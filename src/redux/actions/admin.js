import httpClient from './../../utils/httpClient'
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

        httpClient.request({
            url: `/User/ValidateUserInWaiting`,
            method: 'PUT',
            headers: {'Authorization': `${token}`, 'Content-Type': 'multipart/form-data'},
            data: formData
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
    return (dispatch, getState) => {
        let token = getState().auth.token;
        httpClient.request({
            url: `/User/${id}`,
            method: 'DELETE',
            headers: {'Authorization': `${token}`}
        }).then(() => {
            dispatch(fetchUserInValidation())
        })
    }
};