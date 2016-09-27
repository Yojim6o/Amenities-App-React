import { combineReducers } from 'redux';
import AmenitiesReducer from './reducerAmenities';
import GetLocationReducer from './reducerGetLocation';

const rootReducer = combineReducers({
    amenities: AmenitiesReducer,
    location: GetLocationReducer
});

export default rootReducer;
