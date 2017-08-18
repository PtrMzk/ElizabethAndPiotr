import React, {Component} from 'react';
import '../stylesheets/Content.css';
import OurStory from "./content/OurStory";
import BigDay from "./content/BigDay";
import WeddingOverview from "./content/WeddingOverview";
import * as ReactDOM from "react-dom";
import BridalParty from "./content/BridalParty";
import Registries from "./content/Registries";
import PhotoGallery from "./content/PhotoGallery";
import {getOffset} from '../helpers';

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.scrollToTargetSection = this.scrollToTargetSection.bind(this);
    }

    componentDidMount() {
        this.scrollToTargetSection();
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
