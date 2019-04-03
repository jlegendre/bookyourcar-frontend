import {SET_MESSAGE, SET_NO_MESSAGE} from "../actions/message";

const initialState = {};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return action.json;
        case SET_NO_MESSAGE:
            return initialState;
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getMessage = (state) => state.message;
