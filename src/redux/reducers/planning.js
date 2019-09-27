import {SET_PLANNING} from "../actions/planning";

const initialState = {};


export default function (state = initialState, action) {
    if (action.type === SET_PLANNING) {
        return action.planning;
    } else {
        return state
    }
}

export const getPlanning = state => state.planning;
