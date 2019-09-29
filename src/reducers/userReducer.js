import { LOGIN, LOGOUT, USERINFO } from '../actions/userFunction';

export default function(state=0, action) {
    switch(action.type) {
        case LOGIN:
            return { token: action.payload };
        case LOGOUT:
            return { token: action.payload };
        case USERINFO:
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}