import {USER_IN_WAITING, GET_USER, USERS} from "../actions/user";

const initialState = {
    list: [],
    listAttente: [],
    detail: undefined
};


export default function (state = initialState, action) {
    switch (action.type) {
        case USER_IN_WAITING:
            return {...state, listAttente: action.userInWaiting};
        case USERS:
            return {...state, list: action.users};
        case GET_USER:
            return {...state, detail: action.user};
        default:
            return state
    }
}

export const getUserInWaiting = state => state.user.listAttente;
export const getUserDetail = state => state.user.detail;
export const getUsers = state => state.user.list;



