export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_NO_MESSAGE = 'SET_NO_MESSAGE';
export const SET_NO_MESSAGE_FOR_ATTRIBUT = 'SET_NO_MESSAGE_FOR_ATTRIBUT';


export const setMessage = (json) => {
    return {type: SET_MESSAGE, json}
};

export const setNoMessage = () => {
    return {type: SET_NO_MESSAGE}
};

export const setNoMessageFor = attribut => {
    return {type: SET_NO_MESSAGE_FOR_ATTRIBUT, attribut}
}
