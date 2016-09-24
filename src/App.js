import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

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
                        to="/"
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
