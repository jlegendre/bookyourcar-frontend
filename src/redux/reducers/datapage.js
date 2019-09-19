import _ from 'lodash';

import {
    SET_DATAPAGE_DETAILLOCATION,
    SET_DATAPAGE_DETAILVEHICLE,
    SET_DATAPAGE_LISTVEHICLE,
    SET_DATAPAGE_USERINWAITING,
    SET_PLANNING
} from "../actions/datapage";
import {POLE, POLES} from "../actions/pole";

const initialState = {
    pole: {
        list: [],
        detail: undefined
    },


    userInWaiting: [],
    listVehicle: [],
    listVehicleAvailable: [],
    detailVehicle: undefined,
    detailLocation: undefined,
    planning: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATAPAGE_USERINWAITING:
            return {...state, userInWaiting: action.users};
        case SET_DATAPAGE_LISTVEHICLE:
            return {...state, listVehicle: action.vehicles};
        case SET_DATAPAGE_DETAILVEHICLE:
            return {...state, detailVehicle: action.detailVehicle};
        case POLES:
            return {...state, pole: {...state.pole, list: action.poles}};
        case POLE:
            return {...state, pole: {...state.pole, detail: action.pole}};
        case SET_DATAPAGE_DETAILLOCATION:
            return {...state, detailLocation: action.location};
        case SET_PLANNING:
            return {...state, planning: action.planning};
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getDataPage = (state) => state.datapage;

//retourne tous les utilisateur en attente
export const getUserInWaiting = state => getDataPage(state).userInWaiting;
export const getListVehicles = state => getDataPage(state).listVehicle;
export const getDetailVehicle = state => getDataPage(state).detailVehicle;

export const getPoleList = state => getDataPage(state).pole.list;
export const getPoleDetail = state => getDataPage(state).pole.detail;

export const getPlanning = state => getDataPage(state).planning;

/**
 * Fonction qui permet de construire une liste de pôle pour l'objet InputSelect
 * @param state
 * @return {Array}
 */
export const getListPolesForSelect = state => {
    return _.map(getPoleList(state), pole => {
        return {value: pole.poleId, label: pole.poleName}
    });

};

/**
 * Fonction qui permet de construire une liste de pôle pour l'objet InputSelect
 * @param state
 * @return {Array}
 */
export const getListPolesForSelectByName = state => {
    return _.map(getPoleList(state), pole => {
        return {value: pole.poleName, label: pole.poleName}
    });

};

/**
 * Fonction qui permet de construire une liste de véhicule pour l'objet InputSelect
 * @param state
 * @return {Array}
 */
export const getListVehiclesForSelectByBrandAndModel = state => {
    return _.map(getListVehicles(state), vehicle => {
        return {value: vehicle.vehId, label: vehicle.vehBrand + ' ' + vehicle.vehModel}
    });

};

/**
 * Fonction qui permet de récupérer dans le state le pole par rapport a sont identifiant
 * @param state
 * @param identifiant identifiant du pole a récuperer
 */
export const getPoleById = (state, identifiant) => {
    return _.find(getPoleList(state), {poleId: identifiant});
};