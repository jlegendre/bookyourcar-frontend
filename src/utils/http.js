/**
 * Recupère la réponse d'une requete HTTP
 * @param response
 * @returns {JSON | Promise<any>}
 */
export function getJson(response) {
    if (response.status >= 300) {
        throw new Error(response.statusText);
    }

    return response.json();
}