import {SET_USER_LOGIN} from "../actions/user";

const initialState = {
};


export default function(state = initialState, action) {
    switch (action.type) {
        case SET_USER_LOGIN:
            return action.article;
        default:
            return state
    }
}

//Retourne les infos de l'utilisateur
export const getUser = (state) => state.user;
