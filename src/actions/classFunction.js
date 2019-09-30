import axios from 'axios';

export const GETMYCLASS = 'getmyclass';
export const MAKECLASS = 'makeclass';
export const DELCLASS = 'delclass';

const ROOT_URL = 'http://192.168.139.132:8080/learn';

export function getMyClass(token) {
    const request = axios
        .post(`${ROOT_URL}/myClass`, { token })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: GETMYCLASS,
        payload: request
    }
}

export function makeClass(info) {
    const request = axios
        .post(`${ROOT_URL}/create`, info)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: MAKECLASS,
        payload: request
    }
}

export function delClass(token, cid, data) {
    const request = axios
        .post(`${ROOT_URL}/remove`, { token, cid })
        .then((response) => {
            return response.data.result;
        })
        .catch((response) => {
            console.log(response);
        });
    if(request == 1) console.log("yes");
    return {
        type: DELCLASS,
        payload: data
    }
}