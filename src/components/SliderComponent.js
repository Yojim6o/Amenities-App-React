import React, { Component } from 'react';

class SliderComponent extends Component {
    render() {
        return (
            <div className="slider-container">
                <h2 className="slider-header">
                    What's the highest rated [amenity] in this area?
                </h2>
                <div>
                    <i
                        className="fa fa-map-marker inline-block marker"
                        aria-hidden="true"
                    >
                    </i>
                    <h3 className="slider-location-text inline-block">
                        [Listing Name]
                    </h3>
                </div>
                <button
                    className="slider-left"
                    onClick="changeSelectedDown()"
                >
                    <div>
                        <i
                            className="fa fa-angle-left fa-slide"
                            aria-hidden="true"
                        >
                        </i>
                    </div>
                </button>
                <img
                    className="slider-img"
                    src="https://s3-media2.fl.yelpcdn.com/bphoto/yH4icakrVBLn-o2guHwoWA/ms.jpg"
                    alt=""
                />
                <button
                    className="slider-right"
                    onClick="changeSelectedUp()"
                >
                    <div>
                        <i
                            className="fa fa-angle-right fa-slide"
                            aria-hidden="true"
                        >
                        </i>
                    </div>
                </button>
                <h2 className="slider-header">[ businesses.selected ]</h2>
                <h4 className="slider-location-text">
                    [ Establishment Addresss ]. [ Location ]
                </h4>
                <button className="slider-list-button">
                    <div className="circle inline-block">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </div>
                    <h3 className="inline-block">See The List</h3>
                    <i
                        className="fa fa-angle-right fa-list-arrow"
                        aria-hidden="true"
                    >
                    </i>
                </button>
            </div>
        );
    }
}

export default SliderComponent;
