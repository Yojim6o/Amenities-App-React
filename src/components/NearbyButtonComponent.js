import React, { Component } from 'react';
import { selectCategory } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class NearbyButtonComponent extends Component {

    onClick(index) {
        this.props.selectCategory(index);
    }

    render() {
        const { category } = this.props;

        return (
            <div
                className="nearby-button-container"
                onClick={ () => this.onClick(category.id) }
            >
                <i
                    className={
                        "fa " + category.icon + " sidebar-icon"
                    }
                    aria-hidden="true"
                >
                </i>
                <h1>Nearby { category.sidebarName }</h1>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCategory: selectCategory
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(NearbyButtonComponent);
