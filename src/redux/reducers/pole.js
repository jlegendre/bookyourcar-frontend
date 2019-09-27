import {POLE, POLES} from '../actions/pole';
import _ from "lodash";

const initialState = {
    list: [],
    detail: undefined

};

export default function (state = initialState, action) {
    switch (action.type) {
        case POLES:
            return {...state, list: action.poles};
        case POLE:
            return {...state, detail: action.detail};
        default:
            return state
    }
}

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
 * Fonction qui permet de récupérer dans le state le pole par rapport a sont identifiant
 * @param state
 * @param identifiant identifiant du pole a récuperer
 */
export const getPoleById = (state, identifiant) => {
    return _.find(getPoleList(state), {poleId: identifiant});
};

export const getPoleList = state => state.pole.list;
export const getPoleDetail = state => state.pole.detail;
