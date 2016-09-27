import {
    SET_LOCATION
} from '../actions/index';

const INITIAL_STATE = '...';

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_LOCATION:
            return action.payload;
        default:
            return state;
    }
}
