import { CHANGEPAGE } from '../actions/pageFunction';

export default function(state={page: 0}, action) {
    switch(action.type) {
        case CHANGEPAGE:
            return action.payload;
        default:
            return state;
    }
}