import React, { Component } from 'react';
import { CATEGORIES } from '../constants/Categories';

import NearbyButtonComponent from './NearbyButtonComponent';

class SidebarComponent extends Component {

    renderList() {
        return CATEGORIES.map(category => {
            return (
                <NearbyButtonComponent
                    key={ category.id }
                    category={ category }
                />
            );
        });
    }

    render() {
        return (
            <div className="sidebar-container">
                <button className="sidebar-nav">
                    <i
                        className="fa fa-chevron-up chevron-arrow"
                        aria-hidden="true"
                    >
                    </i>
                </button>
                { this.renderList() }
                <button className="sidebar-nav">
                    <i
                        className="fa fa-chevron-down chevron-arrow"
                        aria-hidden="true"
                    >
                    </i>
                </button>
                <button className="overlay-button">
                    <i className="fa fa-share" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

export default SidebarComponent;
