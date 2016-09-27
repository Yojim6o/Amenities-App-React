import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class HeaderComponent extends Component {

    // onSubmit() {
    //     this.props.resetLocation();
    // }

    render() {
        return (
            <header>
                <div className="header-highlight"></div>
                <h2 className="header-text inline-block">
                    Top Rated Amenities In and Around
                    { ' ' + this.props.location }
                </h2>
                <Link
                    className="inline-block search-container"
                    to="/"
                >
                    <i className="fa fa-search" aria-hidden="true"></i>
                </Link>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        location: state.location
    };
}

export default connect(mapStateToProps, null)(HeaderComponent);
