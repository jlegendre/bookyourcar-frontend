import httpClient from './../../utils/httpClient'
import {setMessage} from "./message";

/**
 * Créer une noubelle réservation
 * @param input donnée a envoyer
 * @param success fonction en cas de succes
 * @return {Function}
 */
export const fetchNewLocation = (input, success) => {
    return dispatch => {
        httpClient.request({
            url: '/Location/AskLocation',
            method: 'POST',
            data: input
        }).then(() => {
            success && success();
            dispatch(setMessage({"Success" : ["Votre réservation a bien été pris en compte"]}))
        }).catch(() => {
            dispatch(setMessage({"Error" : ["Votre demande comporte des erreurs, veuillez vérifier vos données saisies"]}))
        })
    }
};