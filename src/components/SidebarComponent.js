import React, { Component } from 'react';

import NearbyButtonComponent from './NearbyButtonComponent';

const amenities = [
    {
        'name': 'Restaurants',
        'icon': 'fa-cutlery',
        'id': 1
    },
    {
        'name': 'Groceries',
        'icon': 'fa-shopping-cart',
        'id': 2
    },
    {
        'name': 'Banks',
        'icon': 'fa-university',
        'id': 3
    }
];

class SidebarComponent extends Component {
    renderList() {
        return amenities.map(amenity => {
            return (
                <NearbyButtonComponent
                    key={ amenity.id }
                    amenity={ amenity }
                />
            );
        });
    }

    render() {
        return (
            <div className="sidebar-container">
                <button className="sidebar-nav">
                    <i
                        className="fa fa-chevron-up chevron-arrow"
                        aria-hidden="true"
                    >
                    </i>
                </button>
                { this.renderList() }
                <button className="sidebar-nav">
                    <i
                        className="fa fa-chevron-down chevron-arrow"
                        aria-hidden="true"
                    >
                    </i>
                </button>
                <button className="overlay-button">
                    <i className="fa fa-share" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

export default SidebarComponent;
