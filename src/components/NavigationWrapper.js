import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import NavigationButton from "./NavigationButton";
import ReactDOM from 'react-dom';

class NavigationWrapper extends Component {
    constructor(props) {
        super(props);

        this.getLinkBarClassName = this.getLinkBarClassName.bind(this);

        this.state = {
            navigationButtons: [["Our Story", "OurStory"]
                , ["Wedding Party", "WeddingParty"]
                , ["Big Day Details", "BigDay"]
                , ["Pictures", "Pictures"]
                , ["Registry", "Registry"]]
        }
    }

    renderNavigationButtons(navigationButton, i) {
        return (
            <NavigationButton key={i} index={i} linkText={navigationButton[0]} linkUrl={navigationButton[1]}/>
        )
    }

    getLinkBarClassName()
    {
        const navigationLinkBar = "navigation-linkbar";
        const frozen = "-frozen";


        //fix: design based on this https://gist.github.com/Tybi/0c8ffb3d54df8a1c8966
        //or https://github.com/thinhvo0108/react-sticky-dynamic-header/blob/master/src/index.js
        if (window.pageYOffset > 100)
        {
            console.log("Setting NavBar to Frozen.");
            return navigationLinkBar + frozen;
        }
        else
            return navigationLinkBar;
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <div className="navigation-titlebar">
                    <div className="navigation-title">
                        Elizabeth and Piotr
                    </div>
                    <div className="navigation-hashtag">
                        <a href="https://www.instagram.com/explore/tags/marryingmikolajczyk/"
                           className="navigation-hashtag-text" target="_blank"> #MarryingMikolajczyk </a>
                    </div>
                </div>
                <div className={this.getLinkBarClassName()} ref="linkbar">
                    <div className="navigation-linkbar-container">
                        {this.state.navigationButtons.map(this.renderNavigationButtons)}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationWrapper;
