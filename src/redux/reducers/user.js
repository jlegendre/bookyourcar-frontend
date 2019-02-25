import {SET_USER_TOKEN, SET_USER_USERNAME} from "../actions/user";

const initialState = {
    username: undefined,
    token: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_USERNAME:
            return {...state, username: action.username};
        case SET_USER_TOKEN:
            return {...state, token: action.token};
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getUser = (state) => state.user;
export const getToken = (state) => getUser(state).token;
