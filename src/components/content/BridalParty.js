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

                            </td>
                            <td>
                                <img src={Pawel}
                                     className="content-block-image-bridal-party" alt="Pawel"/>
                                <div className="content-block-bridal-party-table-title">
                                    <h2>Pawel Mikolajczyk</h2>
                                    <h3>Best Man</h3>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content-block-bridal-party-table-text">
                                    Elizabeth is so excited that her younger sister Katie will stand beside her at the alter!
                                    Katie has played such a tremendous role in Elizabeth's life and is truly her best friend.
                                    The Bride couldn't imagine spending her last day as a "Lipman Sister" without her pal & confidant beside her!
                                </div>
                            </td>
                            <td>
                                <div className="content-block-bridal-party-table-text">
                                    Piotr's younger brother will be traveling from Texas to join the couple in celebrating their special day!
                                    Include a childhood memory & why you're so excited to have his as your best man.
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

                                </div>

                            </td>
                            <td>
                                <img src={Henry}
                                     className="content-block-image-bridal-party" alt="Henry"/>
                                <div className="content-block-bridal-party-table-title">
                                    <h2>Henry</h2>


                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content-block-bridal-party-table-text">
                                    Claire remembers the first day she saw Elizabeth & Piotr and the feeling of sheer joy she felt at finally
                                    being adopted after waiting several months!
                                    She was equally excited that her new family changed her name from "Orangie" to something a bit
                                    more mature to match her sophisticated personality. Affectionately referred to as the "adventurer",
                                    she has spent four happy years living with her parents and can't wait to see them happily married.
                                </div>
                            </td>
                            <td>
                                <div className="content-block-bridal-party-table-text">
                                    Henry had an instant connection with the couple!
                                    Piotr saw his profile online and sneakily conspired with Judy (Mother of the Bride and lover of all animals)
                                    to visit the adoption center during her trip to Boston. Elizabeth hesitantly went along - still unsure if this was
                                    the "right time" to expand their family. Once the door to his cage was open, Henry immediately put his head on
                                    Elizabeth's shoulder and began to purr. Elizabeth fell in love instantly and they brought him home the same day!
                                    He continues to play the role of "snuggler" to this day and has spent the last three years happily living with the couple!
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
