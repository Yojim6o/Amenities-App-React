import axios from 'axios';
import { CATEGORIES } from '../constants/Categories';

export const FETCH_AMENITIES = 'FETCH_AMENITIES';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_SELECTED = 'SET_SELECTED';

const BASE_URL = 'http://prod-joyfulhome-api.synapsys.us';
const PATH = '/location/amenitiesInLocation/';

export function fetchAmenities(city, state) {
    return function(dispatch) {
        const cb = (res) => {
            return dispatch(loadAmenities(res.data.data));
        }

        axios.get(`${BASE_URL}${PATH}${state}/${city}`)
            .then(cb);
    }
}

export function getLocation(city, state) {
    return function(dispatch) {
        var payload = city + ', ' + state;

        if (payload.indexOf('%') > -1) {
            payload = payload.replace('%20', ' ');
        }

        return dispatch({
            type: SET_LOCATION,
            payload: payload
        });
    }
}

export function resetLocation() {
    return function(dispatch) {
        const payload = '...';

        return dispatch({
            type: SET_LOCATION,
            payload: payload
        });
    }
}

// todo: better naming
export function loadAmenities(data) {
    return function(dispatch) {
        return dispatch({
            type: FETCH_AMENITIES,
            payload: getPayload(data)
        });
    }
}

export function getBusinesses(data) {
    return data.map((business) => {
        return({
            id: business.id,
            name: business.name,
            img: business.image_url,
            rating: business.rating,
            display_address: business.location.display_address
        });
    }).sort((a, b) => { return b.rating - a.rating; });
}

export function getPayload(data) {
    const length = CATEGORIES.length;
    const obj = {};

    for (let i = 0; i < length; i++) {
        const parser = CATEGORIES[i].parser;
        const amenity = data[parser];

        obj[parser] = {
            total: amenity.total,
            businesses: getBusinesses(amenity.businesses)
        }
    }

    return obj;
}

export function selectCategory(index) {
    return function(dispatch) {
        const payload = index;

        return dispatch({
            type: SET_SELECTED,
            payload: payload
        });
    }
}
