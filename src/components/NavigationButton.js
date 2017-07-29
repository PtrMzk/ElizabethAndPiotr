import React, {Component} from 'react';
import '../stylesheets/Navigation.css';

class NavigationButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation-button">
                <a href={this.props.linkUrl} className="navigation-button-text"> {this.props.linkText} </a>
            </div>
        );
    }
}

export default NavigationButton;
