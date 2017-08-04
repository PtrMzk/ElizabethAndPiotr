import React, {Component} from 'react';
import '../stylesheets/Content.css';
import OurStory from "./content/OurStory";
import BigDay from "./content/BigDay";
import WeddingOverview from "./content/WeddingOverview";

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-box light">
                    <WeddingOverview/>
                </div>
                <div className="content-box dark">
                    <OurStory/>
                </div>
                <div className="content-box light">
                    <BigDay/>
                </div>
                <div className="content-box dark">
                    Guestbook
                </div>
            </div>
        );
    }
}

export default ContentWrapper;
