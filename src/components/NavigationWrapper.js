import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import NavigationButton from "./NavigationButton";
import ReactDOM from 'react-dom';


class NavigationWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigationButtons: [
                ["Overview", "Overview"]
                , ["Story", "OurStory"]
                , ["Details", "BigDay"]
                , ["Party", "BridalParty"]
                , ["Registry", "Registries"]
                , ["Pictures", "PhotoGallery"]
            ]
            , linkbarOffset: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.getOffset = this.getOffset.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    renderNavigationButtons(navigationButton, i) {
        return (
            <NavigationButton key={i} index={i} linkText={navigationButton[0]} linkUrl={navigationButton[1]}/>
        )
    }

    // handleScroll, getOffset, componentDidMount, componentWillUnmount based on: https://gist.github.com/Tybi/0c8ffb3d54df8a1c8966
    handleScroll() {
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

    getOffset(element) {
        let bounding = element.getBoundingClientRect();
        return {
            top: bounding.top + document.body.scrollTop,
            left: bounding.left + document.body.scrollLeft
        };
    }

    componentDidMount() {
        let linkbarOffset = this.getOffset(this.refs.linkbar);
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
                        {this.state.navigationButtons.map(this.renderNavigationButtons)}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationWrapper;
