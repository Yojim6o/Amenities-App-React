import { combineReducers } from 'redux';
import AmenitiesReducer from './reducerAmenities';

const rootReducer = combineReducers({
    amenities: AmenitiesReducer
});

export default rootReducer;
