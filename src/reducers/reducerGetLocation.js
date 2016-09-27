import {
    GET_LOCATION
} from '../actions/index';

const INITIAL_STATE = '...';

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_LOCATION:
            return action.payload;
        default:
            return state;
    }
}
