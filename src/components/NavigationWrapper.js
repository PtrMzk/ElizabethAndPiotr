import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import NavigationButton from "./NavigationButton";

class NavigationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationButtons: [["Our Story", "OurStory"], ["Information", "Information"], ["Pictures", "Pictures"], ["Directions", "Directions"]]
        }
    }

    renderNavigationButtons(navigationButton, i) {
        return (
            <NavigationButton key={i} index={i} linkText={navigationButton[0]} linkUrl={navigationButton[1]}/>
        )
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <div className="navigation-titlebar">
                    <div className="navigation-title">
                        Elizabeth and Piotr
                    </div>
                    <div className="navigation-hashtag">
                        <a href="https://www.instagram.com/explore/tags/marryingmikolajczyk/" className="navigation-hashtag-text"> #MarryingMikolajczyk </a>
                    </div>
                </div>
                <div className="navigation-linkbar">
                    <div className="navigation-linkbar-container">
                        {this.state.navigationButtons.map(this.renderNavigationButtons)}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationWrapper;
