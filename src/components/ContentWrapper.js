import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Content.css';
import OurStory from "./content/OurStory";
import BigDay from "./content/BigDay";
import WeddingOverview from "./content/WeddingOverview";
import * as ReactDOM from "react-dom";
import BridalParty from "./content/BridalParty";
import Registries from "./content/Registries";
import PhotoGallery from "./content/PhotoGallery";
import {getOffset} from '../helpers';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as componentBoxActions from '../actions/componentBoxActions';
import {addComponentBox, clearComponentBoxes, updateActiveComponentBox } from "../actions/componentBoxActions";
import {updateActiveNavigationButton} from "../actions/navigationButtonActions"


class ContentWrapper extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.scrollToTargetSection = this.scrollToTargetSection.bind(this);
        this.checkComponentScrolledTo = this.checkComponentScrolledTo.bind(this);
        this.renderComponents = this.renderComponents.bind(this);
        this.populateComponentBoxes = this.populateComponentBoxes.bind(this);
        this.populateComponentBox = this.populateComponentBox.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.clearComponentBoxes = this.clearComponentBoxes.bind(this);

        this.state = {
            components: [
                <WeddingOverview ref="Overview"/>
                , <OurStory ref="OurStory"/>
                , <BigDay ref="BigDay"/>
                , <BridalParty ref="BridalParty"/>
                , <Registries ref="Registries"/>
                , <PhotoGallery ref="PhotoGallery"/>
            ],
            componentBoxes: []
        };
    }


    componentDidMount() {
        this.scrollToTargetSection();
        window.addEventListener('scroll', this.handleScroll);
        this.populateComponentBoxes();

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        //todo: make sure this doesnt run for every scroll
        //if (this.state.componentBoxes.length === 0) {
        this.populateComponentBoxes();
        //}
    }

    populateComponentBoxes() {
        let componentBoxes = this.props.componentBoxes;

        this.clearComponentBoxes();
        this.state.components.map(
            this.populateComponentBox
        );

        let yOffset = window.pageYOffset + Math.sqrt(window.pageYOffset*8);

        for (let i = 0; i < componentBoxes.length; i++) {
            if (componentBoxes[i].top <= yOffset && componentBoxes[i].bottom >= yOffset) {//find first bottom boundary greater than boundary constant. this means that box is inscope
                let componentName = componentBoxes[i].componentName;
                this.props.updateActiveComponentBox(componentName);
                this.props.updateActiveButton(componentName);
                break;
            }
        }
    }

    clearComponentBoxes() {
        this.props.clearComponentBoxes();
    }

    populateComponentBox(component, i) {
        let ref = component.ref;
        let node = ReactDOM.findDOMNode(this.refs[ref]);
        let bounding = getOffset(node);
        //this.state.componentBoxes.push([bounding.top, bounding.bottom]);
        let componentBox = [bounding.top, bounding.bottom];
        let componentWrapper = {componentName: ref, top: componentBox[0], bottom: componentBox[1]};
        this.props.addComponentBox(componentWrapper);
    }

    checkComponentScrolledTo() {
    }

    scrollToTargetSection() {
        if (this.props.match.params && this.props.match.params.scrollTarget && this.props.match.params.scrollTarget.length > 1) {

            let scrollTarget = this.props.match.params.scrollTarget;
            //https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
            let isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            const scrollOffset = 60;

            let scrollTargetNode = ReactDOM.findDOMNode(this.refs[scrollTarget]);

            let scrollTargetOffset = getOffset(scrollTargetNode);
            let scrollTargetY = scrollTargetOffset.top > scrollOffset ? scrollTargetOffset.top - scrollOffset : scrollOffset;

            scrollTargetY *= isAppleDevice ? 1.068 : 1; //fix for iphone - seems to get more out of line the further down the page you go

            window.scrollTo(0, scrollTargetY);
        }
    }

    renderComponents(component, i) {
        const BOX_LIGHT = "content-box light";
        const BOX_DARK = "content-box dark";

        return (
            <div className={i % 2 === 0 ? BOX_LIGHT : BOX_DARK} key={i}>
                {component}
            </div>
        )
    }


    render() {
        return (
            <div className="content-wrapper">
                {this.state.components.map(this.renderComponents)}
            </div>
        );
    }
}

//todo: add propType checks to objects
ContentWrapper.propTypes = {
    componentBoxes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        componentBoxes: state.componentBoxReducer.componentBoxes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //addComponentBox: componentBox => dispatch(componentBoxActions.addComponentBox(componentBox))
        addComponentBox: componentBox => dispatch(addComponentBox(componentBox)),
        clearComponentBoxes: () => dispatch(clearComponentBoxes()),
        updateActiveComponentBox: activeComponentBox => dispatch(updateActiveComponentBox(activeComponentBox)),
        updateActiveButton: activeButtonName => dispatch(updateActiveNavigationButton(activeButtonName))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentWrapper)

