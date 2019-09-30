import axios from 'axios';

export const GETMYTEAM = 'getmyteam';

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