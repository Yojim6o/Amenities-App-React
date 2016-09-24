import React, { Component } from 'react';

class NearbyButtonComponent extends Component {
    render() {
        return (
            <div className="nearby-button-container">
                <i
                    className={
                        "fa " + this.props.amenity.icon + " sidebar-icon"
                    }
                    aria-hidden="true"
                >
                </i>
                <h1>Nearby { this.props.amenity.name }</h1>
            </div>
        );
    }
}

export default NearbyButtonComponent;
