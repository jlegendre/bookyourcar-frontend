import {SET_NO_PROFIL, SET_USER_PROFIL} from './../actions/user';

const initialState = {
    profil: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_PROFIL:
            return {...state, profil: action.profil};
        case SET_NO_PROFIL:
            return {...state, profil: initialState.profil};
        default:
            return state
    }
}

export const getProfil = state => state.user.profil;