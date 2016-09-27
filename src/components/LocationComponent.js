import React, { Component } from 'react';
import { fetchAmenities } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentComponent from './ContentComponent';
import SidebarComponent from './SidebarComponent';

class LocationComponent extends Component {

    componentDidMount() {
        this.props.fetchAmenities();
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
        fetchAmenities: fetchAmenities
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationComponent);
