import { GETMYTEAM } from '../actions/teamFunction';

export default function(state=[], action) {
    switch(action.type) {
        case GETMYTEAM:
            return action.payload;
        default:
            return state;
    }
}