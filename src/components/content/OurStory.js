import React, {Component} from 'react';
import '../../stylesheets/Content.css';
import LizAndPiotr from '../../img/Lipman-E-01-14-17.jpg';

class OurStory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-ourstory">
                <div className="content-ourstory-text">
                    <div className="content-ourstory-image-wrapper">
                        <img src={LizAndPiotr}
                             className="content-ourstory-image" alt="Liz and Piotr in Black and White"/>
                    </div>
                    Elizabeth and Piotr met at Northeastern University in 2007.
                    Elizabeth found Piotr on Facebook whilst looking for eligible Polish Honor's students.
                    They recently moved to New York City and are excited to start the next chapter of their adventure.

                </div>


            </div>
        );
    }
}

export default OurStory;
