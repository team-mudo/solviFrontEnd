import { LOGIN, LOGOUT, USERINFO, TOKENCHECK } from '../actions/userFunction';
import { RESETINFO3 } from '../actions/classFunction';

export default function(state={token: 0}, action) {
    switch(action.type) {
        case TOKENCHECK:
            return { token: action.payload};
        case LOGIN:
            return { token: action.payload};
        case LOGOUT:
            return { token: action.payload };
        case USERINFO:
            return {
                email: action.payload.email,
                nickname: action.payload.nickname,
                auth: action.payload.auth,
                token: state.token
            };
        case RESETINFO3:
            return action.payload;
        default:
            return state;
    }
}