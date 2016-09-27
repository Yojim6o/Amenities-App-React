import React, { Component } from 'react';
import { fetchAmenities, getLocation } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentComponent from './ContentComponent';
import SidebarComponent from './SidebarComponent';

class LocationComponent extends Component {

    componentDidMount() {
        const href = window.location.href;
        const params = href.split('location/')[1];
        const paramArr = params.split('/');

        const state = paramArr[0];
        const city = paramArr[1];

        this.props.getLocation(city, state);
        this.props.fetchAmenities(city, state);
    }

    render() {
        return (
            <div className="location-container">
                { console.log(this.props.amenities) }
                <ContentComponent />
                <SidebarComponent />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        amenities: state.amenities
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAmenities: fetchAmenities,
        getLocation: getLocation
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationComponent);
