import axios from 'axios';

export const REGISTER = 'register';
export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const USERINFO = 'userinfo'

const ROOT_URL = 'http://192.168.139.132:8080/user';

export function register(values, callback) {
    const request = axios
        .post(`${ROOT_URL}/register`, values)
        .then((response) => {
            if(!response.data.result){
                alert(response.data.message);
                callback(1);
            } else {
                callback(0);
            }
            return 0;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: REGISTER,
        payload: request
    };
}

export function login (values, callback) {
    const request = axios
        .post(`${ROOT_URL}/login`, values)
        .then((response) => {
            if(response.data.result === 0) {
                alert(response.data.message);
                callback('/main');
            } else {
                callback('/main');
                return response.data.token;
            }
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: LOGIN,
        payload: request
    };
}

export function logout(callback) {
    callback('/');
    return {
        type: LOGOUT,
        payload: 0
    }
}

export function userinfo(token) {
    const request = axios
        .post(`${ROOT_URL}/info`, { token })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        })
    return {
        type: USERINFO,
        payload: request
    }
}