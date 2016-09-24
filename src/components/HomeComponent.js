import React, { Component } from 'react';
import { Link } from 'react-router';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Link
                    to="/location"
                >
                    Wichita
                </Link>
            </div>
        );
    }
}

export default HomeComponent;
