import {SET_MESSAGE, SET_NO_MESSAGE, SET_NO_MESSAGE_FOR_ATTRIBUT} from "../actions/message";

const initialState = [];


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, ...action.json};
        case SET_NO_MESSAGE:
            return initialState;
        case SET_NO_MESSAGE_FOR_ATTRIBUT:
            delete state[action.attribut];
            return state;
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getMessage = (state) => state.message;
