import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CATEGORIES } from '../constants/Categories';

import AmenityComponent from './AmenityComponent';

class AmenitiesComponent extends Component {

    constructor() {
        super();

        this.state = {
            amenities: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            amenities: this.props.amenities
        });
    }

    renderList() {
        return CATEGORIES.map(category => {
            const parser = category.parser
            const { total } = this.state.amenities === 0 ? 0 :
                this.props.amenities[parser];

            return (
                <AmenityComponent
                    key={ category.id }
                    category={ category }
                    total={ total }
                />
            );
        });
    }

    render() {
        return (
            <div className="amenities-container">
                { this.renderList() }
                <div className="amenity-container">
                    <div className="icon-container inline-block">
                        <i
                            className={
                                "fa fa-ellipsis-h amenity-icon"
                            }
                            aria-hidden="true"
                        >
                        </i>
                    </div>
                    <div className="top inline-block amenity-detail">
                        <div className="inline-block">
                            <h2>Other Amenities</h2>
                            <h3>0 near this listing</h3>
                        </div>
                        <h2 className="see-all inline-block top">
                            See All
                            <i></i>
                        </h2>
                    </div>
                </div>
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

function mapStateToProps(state) {
    return {
        amenities: state.amenities
    };
}

export default connect(mapStateToProps, null)(AmenitiesComponent);
