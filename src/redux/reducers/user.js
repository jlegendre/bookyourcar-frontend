import {GET_USER, USERS} from "../actions/user";

const initialState = {
    list: {},
    detail: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case USERS:
            return {...state, list: action.users};
        case GET_USER:
            return {...state, detail: action.user};
        default:
            return state
    }
}

export const getUserDetail = state => state.user.detail;
export const getUsers = state => state.user.list;



