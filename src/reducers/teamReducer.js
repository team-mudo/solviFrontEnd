import { GETMYTEAM } from '../actions/teamFunction';
import { GETTEAM, RESETINFO, MAKETEAM, DELTEAM } from '../actions/classFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GETMYTEAM:
            return action.payload;
        case GETTEAM: // class
            return action.payload;
        case RESETINFO:
            return action.payload;
        case MAKETEAM: // class
            return [...state, action.payload];
        case DELTEAM: // class
            return action.payload;
        default:
            return state;
    }
}