import config from './../config';
import axios from 'axios';

const httpClinet = axios.create({
    baseURL: config.backend
});


httpClinet.interceptors.response.use(response => {
    return response;
}, error => {
    console.log(error);
});


export default httpClinet;