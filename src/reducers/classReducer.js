import { GETMYCLASS, MAKECLASS, DELCLASS } from '../actions/classFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GETMYCLASS:
            return action.payload;
        case MAKECLASS:
            return [...state, action.payload];
        case DELCLASS:
            return action.payload;
        default:
            return state;
    }
}