import {
    SET_SELECTED
} from '../actions/index';

const INITIAL_STATE = 0;

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_SELECTED:
            return action.payload;
        default:
            return state;
    }
}
