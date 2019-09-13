import httpClient from './../../utils/httpClient';
import {setNoMessage} from "./message";

export const SET_DATAPAGE_USERINWAITING = 'SET_DATAPAGE_USERINWAITING';
export const SET_DATAPAGE_LISTVEHICLE = 'SET_DATAPAGE_LISTVEHICLE';
export const SET_DATAPAGE_DETAILVEHICLE = 'SET_DATAPAGE_DETAILVEHICLE';
export const SET_DATAPAGE_LITVEHICLEAVAILABLE = 'SET_DATAPAGE_VEHICULE_AVAILABLE';
export const SET_DATAPAGE_LISTPOLES = 'SET_DATAPAGE_LISTPOLES';
export const SET_DATAPAGE_DETAILPOLE = 'SET_DATAPAGE_DETAILPOLE';
export const SET_DATAPAGE_RESERVATIONINWAITING = 'SET_DATAPAGE_RESERVATIONINWAITING';
export const SET_DATAPAGE_DETAILLOCATION = 'SET_DATAPAGE_DETAILLOCATION';
export const SET_PLANNING = 'SET_PLANNING';
/**
 * Call /User/userInWaiting Url, pour récupérer tous les utilisateurs en attente de validation
 * @returns {Function}
 */
export const fetchUserInValidation = () => {
    return dispatch => {
        httpClient.request({
            url: '/User/userInWaiting',
            method: 'GET',
        }).then(response => {
            dispatch(setUserInWaiting(response.data));
            dispatch(setNoMessage());
        })
    }
};

/**
 * Call /Vehicle/{i} Url, pour récupérer toutes les informations sur un vehicule donné
 * @returns {Function}
 */
export const fetchVehicleInfos = (id, success) => {
    return dispatch => {
        httpClient.request({
            url: `/Vehicle/${id}`,
            method: 'GET',
        }).then(response => {
            dispatch(setDetailVehicle(response.data));
            dispatch(setNoMessage());
            success && success(response.data);
        })
    }
};

/**
 * Call /Pole Url, pour récupérer tous les poles disponibles
 * @returns {Function}
 */
export const fetchPoles = () => {
    return dispatch => {
        httpClient.request({
            url: '/Pole',
            method: 'GET',
        }).then(response => {
            dispatch(setListPoles(response.data));
        })
    }
};

/**
 * Call /Pole/{i} Url, pour récupérer toutes les informations sur un pole donné
 * @returns {Function}
 */
export const fetchPoleInfos = (id, success) => {
    return dispatch => {
        httpClient.request({
            url: `/Pole/${id}`,
            method: 'GET',
        }).then(response => {
            dispatch(setDetailPole(response.data));
            success && success(response.data);
        })
    }
};

/**
 * Call /Pole/{i} Url, pour modifier toutes les informations sur un pole donné
 * @returns {Function}
 */
export const fetchUpdatePole = ({poleId, poleName, poleCity, poleAddress, poleCp}) => {
    return dispatch => {
        httpClient.request({
            url: `/Pole/${poleId}`,
            method: 'PUT',
            data: {poleId, poleName, poleCity, poleAddress, poleCp},
        }).then(() => {
            dispatch(fetchPoleInfos(poleId))
        })
    }

};


/**
 * Call /Pole/{i} Url, pour ajouter un pole
 * @returns {Function}
 */
export const fetchAddPole = ({poleName, poleCity, poleAddress, poleCp}) => {
    return dispatch => {
        httpClient.request({
            url: `/Pole/`,
            method: 'POST',
            data: {poleName, poleCity, poleAddress, poleCp},
        }).then(() => {
            dispatch(fetchPoles())
        })
    }

};

/**
 * Call /Vehicle Url, pour récupérer tous les véhicules disponibles
 * @returns {Function}
 */
export const fetchVehicles = () => {
    return dispatch => {
        httpClient.request({
            url: '/Vehicle',
            method: 'GET',
        }).then(response => {
            dispatch(setListVehicle(response.data));
        })
    }
};

export const fetchGetLocation = (id, success) => {
    return dispatch => {
        httpClient.request({
            url: `/Location/${id}`,
            method: 'GET',
        }).then(response => {
            dispatch(setLocationDetail(response.data));
            success && success(response.data);
        })
    }
};


export const setUserInWaiting = users => {
    return {type: SET_DATAPAGE_USERINWAITING, users}
};

export const setListVehicle = vehicles => {
    return {type: SET_DATAPAGE_LISTVEHICLE, vehicles}
};

export const setDetailVehicle = detailVehicle => {
    return {type: SET_DATAPAGE_DETAILVEHICLE, detailVehicle}
};

export const setListPoles = poles => {
    return {type: SET_DATAPAGE_LISTPOLES, poles}
};

export const setDetailPole = detailPole => {
    return {type: SET_DATAPAGE_DETAILPOLE, detailPole}
};

export const setReservationInWaiting = reservations => {
    return {type: SET_DATAPAGE_RESERVATIONINWAITING, reservations}
};

export const setLocationDetail = location => {
    return {type: SET_DATAPAGE_DETAILLOCATION, location}
};

export const setPlanning = planning => {
    return {type: SET_PLANNING, planning}
}