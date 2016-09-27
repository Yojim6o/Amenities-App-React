import axios from 'axios';

export const FETCH_AMENITIES = 'FETCH_AMENITIES';
export const GET_LOCATION = 'GET_LOCATION';

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
        const payload = city + ', ' + state;

        return dispatch({
            type: GET_LOCATION,
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
            'id': business.id,
            'name': business.name,
            'img': business.image_url,
            'address': business.location.address[0],
            'city': business.location.city,
            'rating': business.rating
        });
    }).sort((a, b) => { return b.rating - a.rating; });
}

export function getPayload(data) {
    return({
        'restaurants': {
            'total': data.restaurant.total,
            'businesses': getBusinesses(data.restaurant.businesses)
        },
        'grocers': {
            'total': data.grocers.total,
            'busineses': getBusinesses(data.grocers.businesses)
        },
        'banks': {
            'total': data.banks.total,
            'busineses': getBusinesses(data.banks.businesses)
        }
    });
}
