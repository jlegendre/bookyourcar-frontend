import {USER_IN_WAITING, GET_USER} from "../actions/user";

const initialState = {
    list: [],
    detail: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case USER_IN_WAITING:
            return {...state, list: action.userInWaiting};
        case GET_USER:
            return {...state, detail: action.user};
        default:
            return state
    }
}

export const getUserInWaiting = state => state.user.list;
export const getUserDetail = state => state.user.detail;



