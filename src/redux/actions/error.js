export const SET_ERROR = 'SET_ERROR';
export const SET_NO_ERROR = 'SET_NO_ERROR';


export const setError = (json) => {
    return {type: SET_ERROR, json}
};

export const setNoError = () => {
    return {type: SET_NO_ERROR}
};

