import React, { Component } from 'react';
import './App.css';

import HomeComponent from './components/HomeComponent';
import LocationComponent from './components/LocationComponent';

class App extends Component {
    render() {
        return (
            <div className="app-component">
                <header>
                    <div className="header-highlight"></div>
                    <h2 className="header-text inline-block">
                        Top Rated Amenities In and Around [Listing Name]
                    </h2>
                    <Link
                        className="inline-block search-container"
                        to="/signout"
                    >
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </Link>
                </header>
                { this.props.children }
            </div>
        );
    }
}

export default App;
