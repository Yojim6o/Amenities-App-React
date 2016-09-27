import {
    FETCH_AMENITIES
} from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_AMENITIES:
            return { state, action: action.payload };
        default:
            return state;
    }
}
