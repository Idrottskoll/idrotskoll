// in this file we do all GET and POST requests to the API and work with the local localStorage Browser API
import axios from 'axios';

// URL to version 1 of the API
const API_V1 = 'https://www.ikoll.se/api/v1';

/**
 * @param string endpoint
 * @param object requestObject
 * @param string token
 * @return response
 */
export async function PostRequest(endpoint, requestObject) {
    return await axios
        .post(`${API_V1}/${endpoint}`, requestObject)
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
        .get(`${API_V1}/${endpoint}`, token)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
}

/**
 * Quick add item in localStorage
 *
 * @param string name
 * @param string item
 * @return bool/error
 */
export function SetLocalStorage(name, item) {
    return new Promise(async resolve => {
        resolve(await localStorage.setItem(name, item));
    });
}

/**
 * Quick get item from localStorage
 *
 * @param string itenName
 * @return string/error
 */
export function GetLocalStorage(itenName) {
    return localStorage.getItem(itenName);
}

/**
 * Quick remove item from localStorage
 *
 * @param string itenName
 * @return bool/error
 */
export function RemoveLocalStorageItem(itenName) {
    return new Promise(async resolve => {
        resolve(await localStorage.removeItem(itenName));
    });
}

/**
 * Check if a user is is signed in or not
 *
 * @return bool
 */
export async function IsSignedIn() {
    const token = await GetLocalStorage('token');
    if (!token) {
        return false;
    }
    return token;
}
