import { CHANGETEAMPAGE } from '../actions/pageFunction';

export default function(state={page: 0}, action) {
    switch(action.type) {
        case CHANGETEAMPAGE:
            return action.payload;
        default:
            return state;
    }
}