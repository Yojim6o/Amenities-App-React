import React, { Component } from 'react';
import { fetchAmenities, getLocation } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentComponent from './ContentComponent';
import SidebarComponent from './SidebarComponent';
import Loader from 'react-loader';

class LocationComponent extends Component {

    constructor() {
        super();

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        const href = window.location.href;
        const params = href.split('location/')[1];
        const paramArr = params.split('/');

        const state = paramArr[0];
        const city = paramArr[1];

        this.props.getLocation(city, state);
        this.props.fetchAmenities(city, state, this);
    }

    render() {
        return (
            <div className="location-container">
                <Loader loaded={ this.state.loaded }>
                    <ContentComponent />
                    <SidebarComponent />
                </Loader>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAmenities: fetchAmenities,
        getLocation: getLocation
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(LocationComponent);
