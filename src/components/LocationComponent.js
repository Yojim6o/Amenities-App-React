import React, { Component } from 'react';

import ContentComponent from './ContentComponent';
import SidebarComponent from './SidebarComponent';

class LocationComponent extends Component {
    render() {
        return (
            <div>
                <ContentComponent />
                <SidebarComponent />
            </div>
        );
    }
}

export default LocationComponent;
