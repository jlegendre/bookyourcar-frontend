import config from './../config';
import axios from 'axios';

import store from './../index'
import {setMessage} from "../redux/actions/message";

const httpClient = axios.create({
    baseURL: config.backend
});


httpClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        if(error.response.data) {
            store.dispatch(setMessage(error.response.data))
        } else {
            store.dispatch(setMessage({"Error": "Une erreur est survenue"}))
        }

    } else {
        console.log('Error', error.message);
    }
    return error;
});

export default httpClient;