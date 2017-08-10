import React, {Component} from 'react';
import '../stylesheets/Content.css';
import OurStory from "./content/OurStory";
import BigDay from "./content/BigDay";
import WeddingOverview from "./content/WeddingOverview";
import {Route} from "react-router-dom";
import * as ReactDOM from "react-dom";
import BridalParty from "./content/BridalParty";
import Registries from "./content/Registries";
import PhotoGallery from "./content/PhotoGallery";

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getOffset = this.getOffset.bind(this);
        this.scrollToTargetSection = this.scrollToTargetSection.bind(this);
    }

    componentDidMount() {
        this.scrollToTargetSection();
    }

    scrollToTargetSection() {
        if (this.props.match.params && this.props.match.params.scrollTarget && this.props.match.params.scrollTarget.length > 1) {

            let scrollTarget = this.props.match.params.scrollTarget;
            const scrollOffset = 60;

            let scrollTargetNode = ReactDOM.findDOMNode(this);
            //todo: can we do this dynamically
            if (scrollTarget === "BigDay") {
                scrollTargetNode = ReactDOM.findDOMNode(this.refs.BigDay);
            }
            else if (scrollTarget === "OurStory") {
                scrollTargetNode = ReactDOM.findDOMNode(this.refs.OurStory);
            }
            else if (scrollTarget === "BridalParty") {
                scrollTargetNode = ReactDOM.findDOMNode(this.refs.BridalParty);
            }
            else if (scrollTarget === "Overview") {
                scrollTargetNode = ReactDOM.findDOMNode(this.refs.Overview);
            }
            else if (scrollTarget === "Registries") {
                scrollTargetNode = ReactDOM.findDOMNode(this.refs.Registries);
            }
            else if (scrollTarget === "PhotoGallery") {
                scrollTargetNode = ReactDOM.findDOMNode(this.refs.PhotoGallery);
            }

            let scrollTargetOffset = this.getOffset(scrollTargetNode);
            let scrollTargetY = scrollTargetOffset.top > scrollOffset ? scrollTargetOffset.top - scrollOffset : scrollOffset;

            window.scrollTo(0, scrollTargetY);
        }
    }

    //todo: move this to a property so it isnt in two places
    getOffset(element) {
        let bounding = element.getBoundingClientRect();
        return {
            top: bounding.top + document.body.scrollTop,
            left: bounding.left + document.body.scrollLeft
        };
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-box light">
                    <WeddingOverview ref="Overview"/>
                </div>
                <div className="content-box dark">
                    <OurStory ref="OurStory"/>
                </div>
                <div className="content-box light">
                    <BigDay ref="BigDay"/>
                </div>
                <div className="content-box dark">
                    <BridalParty ref="BridalParty"/>
                </div>
                <div className="content-box light">
                <Registries ref="Registries"/>
                </div>
                <div className="content-box dark">
                    <PhotoGallery ref="PhotoGallery"/>
                </div>
            </div>
        );
    }
}

export default ContentWrapper;
