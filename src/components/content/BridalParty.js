import React, {Component} from 'react';
import '../../stylesheets/Content.css';
import Katie from '../../img/katie.png';
import Pawel from '../../img/pawel.png';
import Henry from '../../img/henry.png';
import Claire from '../../img/claire.png';


class BridalParty extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-block-wrapper">
                <div className="content-block-text">
                    <div className="content-block-title">
                        Bridal Party
                    </div>
                    <table className="content-block-bridal-party-table">
                        <tr>
                            <td>
                                <img src={Katie}
                                     className="content-block-image-bridal-party" alt="Katie"/>
                                <div className="content-block-bridal-party-table-title">
                                    <h2>Katie Lipman</h2>
                                    <h3>Maid of Honor</h3>
                                </div>
                                <div className="content-block-bridal-party-table-text">
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                </div>
                            </td>
                            <td>
                                <img src={Pawel}
                                     className="content-block-image-bridal-party" alt="Pawel"/>
                                <div className="content-block-bridal-party-table-title">
                                    <h2>Pawel Mikolajczyk</h2>
                                    <h3>Best Man</h3>
                                </div>
                                <div className="content-block-bridal-party-table-text">
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                </div>
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <div className="content-block-title">
                        Cats of Honor
                    </div>
                    <table>
                        <tr>
                            <td>
                                <img src={Claire}
                                     className="content-block-image-bridal-party" alt="Claire"/>
                                <div className="content-block-bridal-party-table-title">
                                    <h2>Claire</h2>
                                    <h3>Feline of Honor</h3>
                                </div>
                                <div className="content-block-bridal-party-table-text">
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                </div>
                            </td>
                            <td>
                                <img src={Henry}
                                     className="content-block-image-bridal-party" alt="Henry"/>
                                <div className="content-block-bridal-party-table-title">
                                    <h2>Henry</h2>
                                    <h3>Best Feline</h3>

                                </div>
                                <div className="content-block-bridal-party-table-text">
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                    Sample text here.Sample text here.Sample text here.Sample text here.Sample text
                                    here.
                                </div>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        );
    }
}

export default BridalParty;
