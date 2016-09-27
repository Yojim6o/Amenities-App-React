import {
    SET_CATEGORY
} from '../actions/index';

const INITIAL_STATE = {
    name: 'restaurant',
    parser: 'restaurants'
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}