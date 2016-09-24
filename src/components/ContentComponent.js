import React, { Component } from 'react';

import SliderComponent from './SliderComponent';
import AmenitiesComponent from './AmenitiesComponent';

class ContentComponent extends Component {
    render() {
        return (
            <div className="content-container">
                <SliderComponent></SliderComponent>
                <AmenitiesComponent></AmenitiesComponent>
            </div>
        );
    }
}

export default ContentComponent;
