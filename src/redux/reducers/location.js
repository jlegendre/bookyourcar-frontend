import {LOCATION, LOCATIONS} from '../actions/location';

const initialState = {
    list: [],
    detail: undefined

};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOCATIONS:
            return {...state, list: action.locations};
        case LOCATION:
            return {...state, detail: action.location};
        default:
            return state
    }
}

export const getLocationList = state => state.location.list;
export const getLocationDetail = state => state.location.detail;
