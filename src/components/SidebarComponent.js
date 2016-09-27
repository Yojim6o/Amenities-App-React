import React, { Component } from 'react';
import { connect } from 'react-redux';

import NearbyButtonComponent from './NearbyButtonComponent';

class SidebarComponent extends Component {

    renderList() {
        const { categories } = this.props;

        return categories.map(category => {
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

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps, null)(SidebarComponent);
