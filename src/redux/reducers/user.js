
import {SET_USER_LOCATION} from './../actions/user';

const initialState = {
    location: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_LOCATION:
            return {...state, location: action.location};
        default:
            return state
    }
}

export const getLocation = state => {
    return state.user.location;
};