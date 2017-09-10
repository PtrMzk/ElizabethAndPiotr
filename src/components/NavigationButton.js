import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class NavigationButton extends Component {
    constructor(props) {
        super(props);
        this.generateClassName = this.generateClassName.bind(this);
        this.isActiveNavigationButton = this.isActiveNavigationButton.bind(this);
    }

    generateClassName(){
        const NAVIGATION_BUTTON_TEXT = "navigation-button-text";
        const NAVIGATION_BUTTON_TEXT_ACTIVE = " navigation-button-text-active";
        let generatedClassName = NAVIGATION_BUTTON_TEXT;

        if (this.isActiveNavigationButton(this.props.name)) {
            generatedClassName += NAVIGATION_BUTTON_TEXT_ACTIVE;
        }

        return generatedClassName;
    }

    isActiveNavigationButton(navigationButtonName) {
        return (this.props.activeNavigationButton === this.props.linkUrl);
    }

    render() {
        return (
            <div className="navigation-button">
                <a href={this.props.linkUrl} className={this.generateClassName()}> {this.props.name} </a>
            </div>
        );
    }
}

//todo: add propType checks to objects
NavigationButton.propTypes = {
    activeNavigationButton: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        activeNavigationButton: state.navigationButtonReducer.activeButton
    };
}


export default connect(
    mapStateToProps
)(NavigationButton)
