import {SET_CLEAR_DATAPAGE, SET_DATAPAGE} from "../actions/datapage";

const initialState = [];


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATAPAGE:
            return action.data;
        case SET_CLEAR_DATAPAGE:
            return initialState;
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getDataPage = (state) => state.datapage;
