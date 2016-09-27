import React, { Component } from 'react';

import ContentComponent from './ContentComponent';
import SidebarComponent from './SidebarComponent';

class LocationComponent extends Component {
    render() {
        return (
            <div className="location-container">
                <ContentComponent />
                <SidebarComponent />
            </div>
        );
    }
}

export default LocationComponent;
