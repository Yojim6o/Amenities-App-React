import React, { Component } from 'react';
import { connect } from 'react-redux';

class SliderComponent extends Component {

    constructor() {
        super();

        this.state = {
            slide: 0,
            amenities: 0
        }

        this.changeSlide = this.changeSlide.bind(this);
    }

    changeSlide(slide, dir, length) {
        var newValue = slide + dir;

        if (newValue > 0 && newValue < length) {
            this.setState({ slide: newValue });
        } else {
            newValue -= dir;
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ amenities: this.props.amenities });
    }

    render() {
        const { amenities, categories, location } = this.props;
        const slide = this.state.slide;
        const parser = categories[0].parser;

        const {
                length
              } = this.state.amenities === 0 ?
                0
              : amenities[parser].businesses;

        const {
                img,
                name,
                display_address
              } = this.state.amenities === 0 ?
                 ''
              : amenities[parser].businesses[slide];

        return (
            <div className="slider-container">
                <h2 className="slider-header">
                    What's the highest rated { categories[0].sliderName } in this area?
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
                    onClick={ () => this.changeSlide(slide, -1, length) }
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
                    src={ img }
                    alt=""
                />
                <button
                    onClick={ () => this.changeSlide(slide, 1, length) }
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
                <h2 className="slider-header">{ name }</h2>
                <h4 className="slider-location-text">
                    { display_address ? display_address.join(', '): '' }
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
        categories: state.categories,
        location: state.location,
        amenities: state.amenities
    };
}

export default connect(mapStateToProps, null)(SliderComponent);
