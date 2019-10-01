import { GETMYCLASS, MAKECLASS, DELCLASS, RESETINFO } from '../actions/classFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GETMYCLASS:
            return action.payload;
        case MAKECLASS:
            return [...state, action.payload];
        case DELCLASS:
            return action.payload;
        case RESETINFO:
            return action.payload;
        default:
            return state;
    }
}