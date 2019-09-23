import _ from 'lodash';

import {SET_DATAPAGE_USERINWAITING, SET_PLANNING} from "../actions/datapage";
import {POLE, POLES} from "../actions/pole";
import {VEHICULE, VEHICULES} from "../actions/vehicule";
import {LOCATION, LOCATIONS} from '../actions/location';

const initialState = {
    pole: {
        list: [],
        detail: undefined
    },
    vehicule: {
        list: [],
        detail: undefined
    },
    location: {
        list: [],
        detail: undefined
    },
    userInWaiting: [],
    listVehicleAvailable: [],
    detailVehicle: undefined,
    planning: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATAPAGE_USERINWAITING:
            return {...state, userInWaiting: action.users};

        case POLES:
            return {...state, pole: {...state.pole, list: action.poles}};
        case POLE:
            return {...state, pole: {...state.pole, detail: action.pole}};
        case VEHICULES:
            return {...state, vehicule: {...state.vehicule, list: action.vehicules}};
        case VEHICULE:
            return {...state, vehicule: {...state.vehicule, detail: action.vehicule}};
        case LOCATIONS:
            return {...state, location: {...state.location, list: action.locations}};
        case LOCATION:
            return {...state, locations: {...state.location, detail: action.location}};

        case SET_PLANNING:
            return {...state, planning: action.planning};
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getDataPage = state => state.datapage;

//retourne tous les utilisateur en attente
export const getUserInWaiting = state => getDataPage(state).userInWaiting;

//Véhicules
export const getVehiculeList = state => getDataPage(state).vehicule.list;
export const getVehiculeDetail = state => getDataPage(state).vehicule.detail;
//Poles
export const getPoleList = state => getDataPage(state).pole.list;
export const getPoleDetail = state => getDataPage(state).pole.detail;
//Locations
export const getLocationList = state => getDataPage(state).location.list;
export const getLocationDetail = state => getDataPage(state).location.detail;


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
 * Fonction qui permet de construire une liste de véhicule pour l'objet InputSelect
 * @param state
 * @return {Array}
 */
export const getListVehiclesForSelectByBrandAndModel = state => {
    return _.map(getVehiculeList(state), vehicle => {
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