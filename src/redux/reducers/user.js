
import {SET_USER_LOCATION, SET_USER_PROFIL} from './../actions/user';

const initialState = {
    location: [],
    profil: {}
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_LOCATION:
            return {...state, location: action.location};
        case SET_USER_PROFIL:
            return {...state, profil: action.profil};
        default:
            return state
    }
}

export const getLocation = state =>  state.user.location;
export const getProfil = state => state.user.profil;