import React, {Component} from 'react';
import '../stylesheets/Navigation.css';

class NavigationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationButtons: [["About Us", "AboutUs"], ["Directions", "Directions"]]
        }
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <div className="navigation-title">
                    Elizabeth and Piotr
                </div>
                <div className="navigation-hashtag">
                    <a href="https://www.instagram.com/explore/tags/marryingmikolajczyk/"> #MarryingMikolajczyk </a>
                </div>
            </div>
        );
    }
}

export default NavigationWrapper;
