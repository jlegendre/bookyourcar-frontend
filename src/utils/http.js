/**
 * Recupère la réponse d'une requete HTTP
 * @param response
 * @returns {JSON | Promise<any>}
 */
export async function getJson(response) {
    if (response.status >= 300) {
        let error = new Error(response.statusText);
        //récupération du message json de l'erreur
        await response.json().then(json => error.description = json);
        throw error;
    }

    return response.json();
}