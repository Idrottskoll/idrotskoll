import axios from 'axios';

// in this file we do all GET and POST requests to the API

/**
 * @param string endpoint
 * @param object requestObject
 * @param string token
 * @return response
 */
export async function PostRequest(endpoint, requestObject, token = null) {
    return await axios
        .post(`https://www.ikoll.se/api/v1/${endpoint}`, { requestObject, token })
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
        .get(`https://www.ikoll.se/api/v1/${endpoint}`, { token })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
}
