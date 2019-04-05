import config from './../config';
import axios from 'axios';

import store from './../index'
import {setMessage} from "../redux/actions/message";
import {setUserEmpty} from "../redux/actions/auth";

const httpClient = axios.create({
    baseURL: config.backend
});

/**
 * Gestion des succes des requêtes https
 * @param success success d'axios
 * @return {*}
 */
const handleSuccess = success => {
    return success;
};

/**
 * Gestion des erreurs des requêtes https
 * @param error erreur axios
 * @return {{response}}
 */
const handleError = error => {
    if (error.response) {

        //Si il y a une réponse en retour, on créer un message d'erreur
        if (error.response.data) {
            store.dispatch(setMessage(error.response.data))
        } else {
            store.dispatch(setMessage({"Error": "Une erreur est survenue"}))
        }

        //Si il y a une erreur 401, on déconnecte l'utilisateur, car il n'a pas le droit d'acceder a la page
        if (error.response.status === 401) {
            store.dispatch(setUserEmpty())
        }

    } else {
        console.log('Error', error.message);
    }
    return error;
};


//Interceptions des erreurs, pour envoyer les erreurs automatiquements
httpClient.interceptors.response.use(handleSuccess, handleError);

export default httpClient;