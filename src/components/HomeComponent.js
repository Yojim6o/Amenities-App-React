import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetLocation, getCoords } from '../actions/index';

class HomeComponent extends Component {
    constructor() {
        super();

        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.props.resetLocation();
    }

    onSubmit() {
        getCoords();

        this.setState({ loading: true });
    }

    render() {
        return (
            <center className="home-container">
                <button
                    className="slider-list-button"
                    onClick={ () => this.onSubmit() }
                >
                    { this.state.loading ?
                        <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                        : "My Location"
                    }
                </button>
            </center>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetLocation: resetLocation
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeComponent);
