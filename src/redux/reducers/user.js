import {USER_IN_WAITING} from "../actions/user";

const initialState = {
    list: [],
    detail: undefined
};


export default function (state = initialState, action) {
    if (action.type === USER_IN_WAITING) {
        return {...state, list: action.users};
    } else {
        return state
    }
}

export const getUserInWaiting = state => state.user.list;



