import httpClient from "../../utils/httpClient";
import {formatDate} from "../../utils/dateUtils";

export const SET_PLANNING = 'SET_PLANNING';

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

export const setPlanning = planning => {
    return {type: SET_PLANNING, planning}
};