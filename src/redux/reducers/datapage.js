import {SET_DATAPAGE_DETAILVEHICLE, SET_DATAPAGE_LISTVEHICLE, SET_DATAPAGE_USERINWAITING} from "../actions/datapage";

const initialState = {
    userInWaiting: [],
    listVehicle: [],
    detailVehicle: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATAPAGE_USERINWAITING:
            return {...state, userInWaiting: action.user};
        case SET_DATAPAGE_LISTVEHICLE:
            return {...state, listVehicle: action.vehicles};
        case SET_DATAPAGE_DETAILVEHICLE:
            return {...state, detailVehicle: action.detailVehicle};
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
