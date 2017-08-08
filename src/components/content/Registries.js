import React, {Component} from 'react';
import '../../stylesheets/Content.css';
import RegistriesImage from '../../img/registries.jpg';

class Registries extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-block-wrapper">
                <div className="content-block-text-center">
                    <div className="content-block-image-left">
                        <img src={RegistriesImage}
                             className="content-block-image-registries"
                             alt="Liz and Piotr gazing into each other's eyes"/>
                    </div>
                    <div className="content-block-title">
                        Registries
                    </div>
                    <h1>Bed Bath and Beyond</h1>
                    <h1>Amazon</h1>

                </div>
            </div>
        );
    }
}

export default Registries;
