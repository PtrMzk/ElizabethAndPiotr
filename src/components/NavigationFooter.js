import React, {Component} from 'react';
import '../stylesheets/Navigation.css';

class NavigationFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation-footer">
                Copyright 2017 - Piotr Mikolajczyk
                <br/>
                <a href="http://jakubredziniak.com/"
                   className="navigation-hashtag-text" target="_blank" rel="noopener noreferrer">
                    Professional Photographs by Jakuk Redziniak </a>
            </div>
        );
    }
}

export default NavigationFooter;
