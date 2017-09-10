import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import NavigationButton from "./NavigationButton";
import ReactDOM from 'react-dom';
import {getOffset} from "../helpers"
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


class NavigationWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linkbarOffset: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.freezeNavigationPane = this.freezeNavigationPane.bind(this);
    }

    renderNavigationButtons(navigationButton, i) {
        return (
            <NavigationButton key={i} index={i} name={navigationButton.name} linkUrl={navigationButton.link}
                              isInScrollScope={navigationButton.isInScrollScope}/>
        )
    }


    // handleScroll, getOffset, componentDidMount, componentWillUnmount based on: https://gist.github.com/Tybi/0c8ffb3d54df8a1c8966
    handleScroll() {
        this.freezeNavigationPane();
        //this.highlightButton();
    }

    //todo: this needs to move towards an event architecture
    highlightButton() {
        for (let i = 0; i < this.state.navigationButtons.length; i++) {
            let navigationButton = this.state.navigationButtons[i];
            let buttonTarget = navigationButton.link;
            let node = ReactDOM.findDOMNode(this.refs[buttonTarget]);
            let bounding = node.getBoundingClientRect();
            if (window.pageYOffset >= bounding.top && window.pageYOffset <= bounding.bottom) {
                navigationButton.isInScrollScope = true;
                break;
            }
        }
    }

    freezeNavigationPane() {
        const NAVIGATION_LINK_BAR_FROZEN = "navigation-linkbar-frozen";
        const NAVIGATION_WRAPPER_PADDED = "navigation-wrapper-padded";

        let linkbar = ReactDOM.findDOMNode(this.refs.linkbar);
        let navigationWrapper = ReactDOM.findDOMNode(this.refs.navigationWrapper);
        let linkbarOffset = this.state.linkbarOffset;

        let windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop >= linkbarOffset.top) {
            linkbar.classList.add(NAVIGATION_LINK_BAR_FROZEN);
            navigationWrapper.classList.add(NAVIGATION_WRAPPER_PADDED);
        } else {
            linkbar.classList.remove(NAVIGATION_LINK_BAR_FROZEN);
            navigationWrapper.classList.remove(NAVIGATION_WRAPPER_PADDED);
        }
    }

    componentDidMount() {
        let linkbarOffset = getOffset(this.refs.linkbar);
        window.addEventListener('scroll', this.handleScroll);

        this.setState((prevState, props) => ({
            linkbarOffset: linkbarOffset
        }));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className="navigation-wrapper" ref="navigationWrapper">
                <div className="navigation-titlebar">
                    <div className="navigation-title">
                        Elizabeth and Piotr
                    </div>
                    <div className="navigation-hashtag">
                        <a href="https://www.instagram.com/explore/tags/marryingmikolajczyk/"
                           className="navigation-hashtag-text" target="_blank" rel="noopener noreferrer">
                            #MarryingMikolajczyk </a>
                    </div>
                </div>
                <div className="navigation-linkbar" ref="linkbar">
                    <div className="navigation-linkbar-container">
                        {this.props.navigationButtons.map(this.renderNavigationButtons)}
                    </div>
                </div>
            </div>
        );
    }
}

//todo: add propType checks to objects
NavigationWrapper.propTypes = {
    activeComponentBox: PropTypes.string.isRequired,
    navigationButtons: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        activeComponentBox: state.componentBoxReducer.activeComponentBox,
        navigationButtons: state.navigationButtonReducer.navigationButtons
    };
}

export default connect(
    mapStateToProps
)(NavigationWrapper);
