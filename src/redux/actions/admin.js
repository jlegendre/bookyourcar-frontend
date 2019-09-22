import httpClient from './../../utils/httpClient'
import {fetchUserInValidation, setPlanning} from "./datapage";
import {setUserLocation} from './user';
import {formatDate} from "../../utils/dateUtils";


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
            url: `/User/RefuseUserInWaiting/${id}`,
            method: 'POST',
        }).then(() => {
            dispatch(fetchUserInValidation())
        })
    }
};

export const fetchAdminLocation = () => {
    return dispatch => {
        httpClient.request({
            url: 'Location/ManageLocations',
            method: 'GET'
        }).then(response => {
            dispatch(setUserLocation(response.data))
        })
    }
};

export const fetchPlanningVehicule = date => {
    return dispatch => {
        httpClient.request({
            url: `Planning/${formatDate(date, 'YYYY-MM-dd')}`,
            method: 'GET'
        }).then(response => {
            dispatch(setPlanning(response.data))
        })
    }
};