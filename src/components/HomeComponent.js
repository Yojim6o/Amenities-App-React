import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetLocation } from '../actions/index';

class HomeComponent extends Component {

    componentDidMount() {
        this.props.resetLocation();
    }

    render() {
        return (
            <div>
                <Link
                    to="/location/KS/Wichita"
                >
                    Wichita
                </Link>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetLocation: resetLocation
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeComponent);
