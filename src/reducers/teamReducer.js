import { GETMYTEAM } from '../actions/teamFunction';
import { GETTEAM, RESETINFO, RESETINFO2 } from '../actions/classFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GETMYTEAM:
            return action.payload;
        case GETTEAM: // class
            return action.payload;
        case RESETINFO:
            return action.payload;
        case RESETINFO2:
            return action.payload;
        default:
            return state;
    }
}