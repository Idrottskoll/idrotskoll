// in this file we do all GET and POST requests to the API
import axios from 'axios';

// URL to version 1 of the API
const API_V1 = 'https://www.ikoll.se/api/v1';

/**
 * @param string endpoint
 * @param object requestObject
 * @param string token
 * @return response
 */
export async function PostRequest(endpoint, requestObject, token = null) {
    return await axios
        .post(`${API_V1}/${endpoint}`, { requestObject, token })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
}

/**
 * @param string endpoint
 * @param string token
 * @return response
 */
export async function GetRequest(endpoint, token = null) {
    return await axios
        .get(`${API_V1}/${endpoint}`, { token })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
}
