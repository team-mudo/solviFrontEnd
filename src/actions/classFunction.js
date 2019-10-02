import axios from 'axios';

export const GETMYCLASS = 'getmyclass';
export const MAKECLASS = 'makeclass';
export const DELCLASS = 'delclass';
export const GETTEAM = 'getteam';
export const GETTEAMUSER = 'getteamuser';
export const RESETINFO = 'resetinfo';  // LOGOUT
export const RESETINFO2 = 'resetinfo2';
export const RESETINFO3 = 'resetinfo3';
export const MAKETEAM = 'maketeam';
export const DELTEAM = 'delteam';
export const INVITEUSER = 'inviteuser';
export const OUTUSER = 'outuser';

const ROOT_URL = 'http://192.168.139.132:8080/learn';

export function resetinfo() {
    return {
        type: RESETINFO,
        payload: []
    }
}

export function resetinfo2() {
    return {
        type: RESETINFO2,
        payload: []
    }
}

export function resetinfo3() {
    return {
        type: RESETINFO3,
        payload: { token: 0 }
    }
}

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
    return {
        type: DELCLASS,
        payload: data
    }
}

export function getTeam(token, cid) {
    const request = axios
        .post(`${ROOT_URL}/team`, { token, cid })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: GETTEAM,
        payload: request
    }
}

export function getTeamUser(token, tid) {
    const request = axios
        .post(`${ROOT_URL}/team/user`, { token, tid })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: GETTEAMUSER,
        payload: request
    }
}

export function makeTeam(info) {
    const request = axios
        .post(`${ROOT_URL}/team/create`, info)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: MAKETEAM,
        payload: request
    }
}

export function delTeam(token, tid, data ) {
    const request = axios
        .post(`${ROOT_URL}/team/remove`, { token, tid })
        .then((response) => {
            return response.data.result;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: DELTEAM,
        payload: data
    }
}

export function inviteUser(info) {
    const request = axios
        .post(`${ROOT_URL}/team/invite`, info)
        .then((response) => {
            if(response.data.result === 0) {
                alert(response.data.message);
                return {user: -1};
            } else {
                return response.data;
            }
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: INVITEUSER,
        payload: request
    }
}

export function delUser(tid, uid, token, data) {
    const request = axios
        .post(`${ROOT_URL}/team/out`, { tid, uid , token })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
        });
    return {
        type: OUTUSER,
        payload: data
    }
}