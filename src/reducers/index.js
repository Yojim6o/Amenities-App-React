import { combineReducers } from 'redux';
import AmenitiesReducer from './reducerAmenities';
import LocationReducer from './reducerLocation';
import CategoryReducer from './reducerCategory';
import SelectedReducer from './reducerSelected';

const rootReducer = combineReducers({
    amenities: AmenitiesReducer,
    location: LocationReducer,
    categories: CategoryReducer,
    selected: SelectedReducer
});

export default rootReducer;
