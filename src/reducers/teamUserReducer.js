import { GETTEAMUSER, RESETINFO, RESETINFO2 } from '../actions/classFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GETTEAMUSER:
            return action.payload;
        case RESETINFO:
            return action.payload;
        case RESETINFO2:
            return action.payload;
        default:
            return state;
    }
}