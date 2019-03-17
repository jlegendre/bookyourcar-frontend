import {SET_ERROR, SET_NO_ERROR} from "../actions/error";

const initialState = {};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return action.json;
        case SET_NO_ERROR:
            return initialState;
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getError = (state) => state.error;
