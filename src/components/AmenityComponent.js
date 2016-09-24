import React, { Component } from 'react';

class AmenityComponent extends Component {
    render() {
        return (
            <div className="amenity-container">
                <div className="icon-container inline-block">
                    <i
                        className="fa amenity-icon"
                        aria-hidden="true"
                    >
                    </i>
                </div>
                <div className="top inline-block amenity-detail">
                    <div className="inline-block">
                        <h2>{ this.props.amenity.name }</h2>
                        <h3>## near this listing</h3>
                    </div>
                    <h2 className="see-all inline-block top">
                        See All
                        <i></i>
                    </h2>
                </div>
            </div>
        );
    }
}

export default AmenityComponent;
