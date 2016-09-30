import axios from 'axios';
import { CATEGORIES } from '../constants/Categories';
import { browserHistory } from 'react-router';

import geolocation from 'geolocation';

export const FETCH_AMENITIES = 'FETCH_AMENITIES';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_SELECTED = 'SET_SELECTED';

const BASE_URL = 'https://prod-joyfulhome-api.synapsys.us';
const PATH = '/location/amenitiesInLocation/';

export function fetchAmenities(city, state, component) {
    return function(dispatch) {
        const cb = (res) => {
            component.setState({ loaded: true });
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

export function getCoords() {
    geolocation.getCurrentPosition(function (err, position) {
        if (err) throw err;
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        reverseGeocode(lat, lon);
    });
}

export function reverseGeocode(lat, lon) {
    const cb = (res) => {
        const results = res.data.results[0].address_components.reverse();
        const city = results[4].long_name;
        const state = results[2].short_name;

        browserHistory.push(`/location/${state}/${city}`);
    }

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=false`)
        .then(cb);
}
