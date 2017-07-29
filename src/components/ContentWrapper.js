import React, {Component} from 'react';
import '../stylesheets/Content.css';
import OurStory from "./content/OurStory";

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-box light">
                    <OurStory/>
                </div>
                <div className="content-box dark">
                    Photo Album
                </div>
                <div className="content-box light">
                    Wedding Information
                </div>
                <div className="content-box dark">
                    Guestbook
                </div>
            </div>
        );
    }
}

export default ContentWrapper;
