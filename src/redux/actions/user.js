import httpClient from './../../utils/httpClient'

/**
 * Créer une noubelle réservation
 * @param input donnée a envoyer
 * @param success fonction en cas de succes
 * @return {Function}
 */
export const fetchNewLocation = (input, success) => {
    return dispatch => {
        console.log(input);
        httpClient.request({
            url: '/Location/AskLocation',
            method: 'POST',
            body: input
        }).then(() => {
            success && success();
        })
    }
};