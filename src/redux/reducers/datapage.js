import _ from 'lodash';

import {
    SET_DATAPAGE_DETAILPOLE,
    SET_DATAPAGE_DETAILVEHICLE,
    SET_DATAPAGE_LISTPOLES,
    SET_DATAPAGE_LISTVEHICLE,
    SET_DATAPAGE_USERINWAITING
} from "../actions/datapage";

const initialState = {
    userInWaiting: [],
    listVehicle: [],
    detailVehicle: undefined,
    listPoles: [],
    detailPole: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATAPAGE_USERINWAITING:
            return {...state, userInWaiting: action.users};
        case SET_DATAPAGE_LISTVEHICLE:
            return {...state, listVehicle: action.vehicles};
        case SET_DATAPAGE_DETAILVEHICLE:
            return {...state, detailVehicle: action.detailVehicle};
        case SET_DATAPAGE_LISTPOLES:
            return {...state, listPoles: action.poles};
        case SET_DATAPAGE_DETAILPOLE:
            return {...state, detailPole: action.detailPole};
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
export const getListPoles = state => getDataPage(state).listPoles;
export const getDetailPoles = state => getDataPage(state).detailPole;

/**
 * Fonction qui permet de construire une liste de pôle pour l'objet InputSelect
 * @param state
 * @return {Array}
 */
export const getListPolesForSelect = state => {
    return _.map(getListPoles(state), pole => {
        return {value: pole.poleId, label: pole.poleName}
    });

};

/**
 * Fonction qui permet de construire une liste de pôle pour l'objet InputSelect
 * @param state
 * @return {Array}
 */
export const getListPolesForSelectByName = state => {
    return _.map(getListPoles(state), pole => {
        return {value: pole.poleName, label: pole.poleName}
    });

};

/**
 * Fonction qui permet de construire une liste de pôle pour l'objet InputSelect
 * @param state
 * @return {Array}
 */
export const getListVehiclesForSelectByBrandAndModel= state => {
    return _.map(getListVehicles(state), vehicle => {
        return {value: vehicle.vehId, label: vehicle.vehBrand + ' ' +vehicle.vehModel}
    });

};

/**
 * Fonction qui permet de récupérer dans le state le pole par rapport a sont identifiant
 * @param state
 * @param identifiant identifiant du pole a récuperer
 */
export const getPoleById = (state, identifiant) => {
    return _.find(getListPoles(state), {poleId: identifiant});
};