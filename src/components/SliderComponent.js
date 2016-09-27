import React, { Component } from 'react';
import { connect } from 'react-redux';

class SliderComponent extends Component {

    constructor() {
        super();

        this.state = {
            slide: 0
        }
    }

    render() {
        const { amenities, category, location } = this.props;
        const slide = this.state.slide;
        const parser = category.parser;

        return (
            <div className="slider-container">
                { console.log(amenities[parser].businesses) }
                <h2 className="slider-header">
                    What's the highest rated { category.name } in this area?
                </h2>
                <div>
                    <i
                        className="fa fa-map-marker inline-block marker"
                        aria-hidden="true"
                    >
                    </i>
                    <h3 className="slider-location-text inline-block">
                        { location }
                    </h3>
                </div>
                <button
                    className="slider-left"
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
                    src=''
                    alt=""
                />
                <button
                    className="slider-right"
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

function mapStateToProps(state) {
    return {
        category: state.category,
        location: state.location,
        amenities: state.amenities
    };
}

export default connect(mapStateToProps, null)(SliderComponent);

// { amenities.restaurants.businesses[slide].img }
