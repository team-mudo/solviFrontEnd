import { GETTEAMUSER, RESETINFO, RESETINFO2, INVITEUSER, OUTUSER } from '../actions/classFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GETTEAMUSER:
            return action.payload;
        case INVITEUSER:
            return [...state, action.payload];
        case RESETINFO:
            return action.payload;
        case RESETINFO2:
            return action.payload;
        case OUTUSER:
            return action.payload;
        default:
            return state;
    }
}