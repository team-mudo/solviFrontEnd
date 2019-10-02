import axios from 'axios';

export const GETMYTEAM = 'getmyteam';
export const DELTEAM2 = 'delteam';
export const ISTEAM = 'isteam';

const ROOT_URL = 'http://192.168.139.132:8080/team';

export function getMyTeam(token) {
    const request = axios
        .post(`${ROOT_URL}/my`, { token })
        .then((response) => {
            return response.data;  
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: GETMYTEAM,
        payload: request
    }
}

export function delTeam(token, tid) {
    const request = axios
        .post(`${ROOT_URL}/del`, { token, tid })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: DELTEAM2,
        payload: 0
    }       
}

export function isTeam(token, url) {
    const request = axios
        .post(`${ROOT_URL}/${url}`, { token })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: ISTEAM,
        payload: 0
    }     
}