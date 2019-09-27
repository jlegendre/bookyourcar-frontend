import {GET_USER_PROFIL, SET_USER_EMPTY, SET_USER_ROLE, SET_USER_TOKEN, SET_USER_USERNAME} from "../actions/auth";

const initialState = {
    username: undefined,
    token: undefined,
    role: undefined,
    user: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_USERNAME:
            return {...state, username: action.username};
        case SET_USER_TOKEN:
            return {...state, token: action.token};
        case SET_USER_ROLE:
            return {...state, role: action.role};
        case SET_USER_EMPTY:
            return initialState;
        case GET_USER_PROFIL:
            return {...state, user: action.profil};
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getAuth = state => state.auth;
export const getToken = state => getAuth(state).token;
export const getRole = state => getAuth(state).role;
export const getProfil = state => getAuth(state).user;
