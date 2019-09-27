import {VEHICULE, VEHICULES} from '../actions/vehicule';
import _ from "lodash";

const initialState = {
    list: [],
    detail: undefined

};

export default function (state = initialState, action) {
    switch (action.type) {
        case VEHICULES:
            return {...state, list: action.vehicules};
        case VEHICULE:
            return {...state, detail: action.vehicule};
        default:
            return state
    }
}

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


export const getVehiculeList = state => state.vehicule.list;
export const getVehiculeDetail = state => state.vehicule.detail;
