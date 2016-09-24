import React, { Component } from 'react';

import AmenityComponent from './AmenityComponent';

const amenities = [
    {
        'name': 'Restaurants',
        'icon': 'fa-cutlery',
        'id': 1
    },
    {
        'name': 'Grocery Stores',
        'icon': 'fa-shopping-cart',
        'id': 2
    },
    {
        'name': 'Banks',
        'icon': 'fa-university',
        'id': 3
    },
    {
        'name': 'Other Amenities',
        'icon': 'fa-ellipsis-h',
        'id': 4
    }
];

class AmenitiesComponent extends Component {
    renderList() {
        return amenities.map(amenity => {
            return (
                <AmenityComponent
                    key={ amenity.id }
                    amenity={ amenity }
                />
            );
        });
    }

    render() {
        return (
            <div className="amenities-container">
                { this.renderList() }
                <center>
                    <button className="amenity-list-button">
                        <div className="circle inline-block">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <h3 className="inline-block">See All Amenities</h3>
                        <i
                            className="fa fa-angle-right fa-list-arrow"
                            aria-hidden="true"
                        >
                        </i>
                    </button>
                    <div className="bottom-line"></div>
                </center>
            </div>
        );
    }
}

export default AmenitiesComponent;
