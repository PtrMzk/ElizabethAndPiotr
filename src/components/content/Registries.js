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
                             className="content-block-image-registries content-block-image-rounded"
                             alt="Liz and Piotr gazing into each other's eyes"/>
                    </div>
                    <div className="content-block-title">
                        Registries
                    </div>
                    <a href="https://en.wikipedia.org/wiki/United_States_dollar"
                       target="_blank" rel="noopener noreferrer">
                        <div className="content-block-text-registry-link">First Home Fund</div>
                    </a>
                    <a href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=544902931&eventType=Wedding&pwsurl="
                       target="_blank" rel="noopener noreferrer">
                        <div className="content-block-text-registry-link">Bed Bath and Beyond</div>
                    </a>
                    <a href="https://www.amazon.com/wedding/elizabeth-lipman-piotr-mikolajczyk-basking-ridge-november-2018/registry/LX18QW7DHF1M"
                       target="_blank" rel="noopener noreferrer">
                        <div className="content-block-text-registry-link">Amazon</div>
                    </a>
                    {/*<a href="https://www.crateandbarrel.com/gift-registry/elizabeth-lipman-and-piotr-mikolajczyk/r5726290"*/}
                       {/*target="_blank" rel="noopener noreferrer">*/}
                        {/*<div className="content-block-text-registry-link">Crate & Barrel</div>*/}
                    {/*</a>*/}

                </div>
            </div>
        );
    }
}

export default Registries;
