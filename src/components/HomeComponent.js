import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetLocation, getCoords } from '../actions/index';

class HomeComponent extends Component {

    componentDidMount() {
        this.props.resetLocation();
    }

    onSubmit() {
        getCoords();
    }

    render() {
        return (
            <div className="home-container">
                <Link
                    to="/location/KS/Wichita"
                >
                    Wichita
                </Link>
                <br /><br />
                <button
                    onClick={ () => this.onSubmit() }
                >
                    Me!
                </button>
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
