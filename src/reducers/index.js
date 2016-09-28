import { combineReducers } from 'redux';
import AmenitiesReducer from './reducerAmenities';
import LocationReducer from './reducerLocation';
import SelectedReducer from './reducerSelected';

const rootReducer = combineReducers({
    amenities: AmenitiesReducer,
    location: LocationReducer,
    selected: SelectedReducer
});

export default rootReducer;
