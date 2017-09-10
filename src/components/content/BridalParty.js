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
        const KATIE_LIPMAN = "Katie Lipman";
        const MAID_OF_HONOR = "Maid of Honor";
        const KATIE_DESCRIPTION = "Elizabeth is so excited that her younger sister and best friend will stand beside \n" +
            "her at the altar as Maid of Honor. \n" +
            "<br/><br/> The pair have spent endless hours together laughing and playing - \n" +
            "as children building sand castles on the beach, \n" +
            "as teenagers going on driving adventures in high school, \n" +
            "as college students staying in touch via hour-long phone calls \n" +
            "and currently as neighbors in Brooklyn. \n" +
            "<br/><br/>Elizabeth loves how Katie always knows exactly what to say! Katie is her best friend, truest adviser, biggest cheerleader, and oldest secret \n" +
            "keeper! <br/><br/>Elizabeth \n" +
            "couldn't imagine spending her last day as a 'Lipman Sister' without her closest pal \n" +
            "& confidant beside her!";

        const PAWEL_MIKOLAJCZYK = "Pawel Mikolajczyk";
        const BEST_MAN = "Best Man";
        const PAWEL_DESCRIPTION = "Piotr's younger brother Pawel will be traveling from Texas to join the couple in\n" +
            "celebrating their special day!\n" +
            "<br/><br/>Piotr and Pawel have been getting into trouble together since they were\n" +
            "young. They began constructing empires at a young age -\n" +
            "plotting to over take each others\n" +
            "bedrooms with Legos and action figures. As they matured, so did their goals, and the\n" +
            "two spent endless hours together\n" +
            "saving the solar system in the computer game Descent.\n" +
            "<br/><br/>Currently, both brothers have plans to take over the internet with their unique (and\n" +
            "super cool)\n" +
            "software creations. <br/><br/>For Piotr, there has only ever been one \"Best Man\" in\n" +
            "his life and he is so happy\n" +
            "Pawel will be standing next to him on his wedding day.";

        const CLAIRE = "Claire";
        const CLAIRE_DESCRIPTION = "Claire remembers the first day she saw Elizabeth & Piotr and the feeling of sheer\n" +
            "joy she felt at finally\n" +
            "being adopted after waiting several months!\n" +
            "<br/><br/>She was equally excited that her new family changed her name from\n" +
            "\"Orangie\" to\n" +
            "something a bit\n" +
            "more mature to match her sophisticated personality. Affectionately referred to as\n" +
            "the \"adventurer\",\n" +
            "she has spent four happy years living with her parents and can't wait to see them\n" +
            "\happily married.";

        const HENRY = "Henry";
        const HENRY_DESCRIPTION = "Henry had an instant connection with the couple!\n" +
            "Piotr saw his profile online and sneakily conspired with Judy (Mother of the Bride\n" +
            "and lover of all animals)\n" +
            "to visit the adoption center during her trip to Boston. <br/><br/>Once the door to\n" +
            "his cage\n" +
            "was open, Henry immediately put his head on\n" +
            "Elizabeth's shoulder and began to purr. The couple fell in love instantly and they\n" +
            "brought him home the same day!\n" +
            "He continues to play the role of \"snuggler\" to this day and has spent the last three\n" +
            "years happily living with the couple!";

        const MSPCA = " MSPCA";

        return (
            <div className="content-block-wrapper">
                <div className="content-block-text">
                    <div className="content-block-title">
                        Bridal Party
                    </div>
                    <div className="content-block-bridal-party-desktop-tables">
                        <table className="content-block-bridal-party-table">
                            <tr>
                                <td>
                                    <img src={Katie}
                                         className="content-block-image-bridal-party" alt="Katie"/>
                                    <div className="content-block-bridal-party-table-title">
                                        <h2>{KATIE_LIPMAN}</h2>
                                        <h3>{MAID_OF_HONOR}</h3>
                                    </div>
                                </td>
                                <td>
                                    <img src={Pawel}
                                         className="content-block-image-bridal-party" alt="Pawel"/>
                                    <div className="content-block-bridal-party-table-title">
                                        <h2>{PAWEL_MIKOLAJCZYK}</h2>
                                        <h3>{BEST_MAN}</h3>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: KATIE_DESCRIPTION}}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: PAWEL_DESCRIPTION}}/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <br/>
                        <div className="content-block-title content-block-title-cats-of-honor">
                            Cats of Honor
                        </div>
                        <table className="content-block-bridal-party-cats-of-honor-table">
                            <tr>
                                <td>
                                    <img src={Claire}
                                         className="content-block-image-bridal-party" alt="Claire"/>
                                    <div className="content-block-bridal-party-table-title">
                                        <h2>{CLAIRE}</h2>
                                    </div>
                                </td>
                                <td>
                                    <img src={Henry}
                                         className="content-block-image-bridal-party" alt="Henry"/>
                                    <div className="content-block-bridal-party-table-title">
                                        <h2>{HENRY}</h2>


                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: CLAIRE_DESCRIPTION}}/>

                                    </div>
                                </td>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: HENRY_DESCRIPTION}}/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className="content-block-bridal-party-mobile-tables">
                        <table className="content-block-bridal-party-table">
                            <tr>
                                <td className="content-block-padded-cell">
                                    <img src={Katie}
                                         className="content-block-image-bridal-party" alt="Katie"/>
                                    <div className="content-block-bridal-party-table-title">
                                        <h2>{KATIE_LIPMAN}</h2>
                                        <h3>{MAID_OF_HONOR}</h3>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: KATIE_DESCRIPTION}}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="content-block-padded-cell">
                                    <img src={Pawel}
                                         className="content-block-image-bridal-party" alt="Pawel"/>
                                    <div className="content-block-bridal-party-table-title">
                                        <h2>{PAWEL_MIKOLAJCZYK}</h2>
                                        <h3>{BEST_MAN}</h3>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: PAWEL_DESCRIPTION}}/>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <div className="content-block-title content-block-title-cats-of-honor">
                            Cats of Honor
                        </div>
                        <table className="content-block-bridal-party-cats-of-honor-table">
                            <tr>
                                <td className="content-block-padded-cell">
                                    <img src={Claire}
                                         className="content-block-image-bridal-party" alt="Claire"/>
                                    <div className="content-block-bridal-party-table-title">
                                        <h2>{CLAIRE}</h2>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: CLAIRE_DESCRIPTION}}/>

                                    </div>
                                </td>
                            </tr>
                            <td className="content-block-padded-cell">
                                <img src={Henry}
                                     className="content-block-image-bridal-party" alt="Henry"/>
                                <div className="content-block-bridal-party-table-title">
                                    <h2>{HENRY}</h2>
                                </div>

                            </td>
                            <tr>
                                <td>
                                    <div className="content-block-bridal-party-table-text">
                                        <div dangerouslySetInnerHTML={{__html: HENRY_DESCRIPTION}}/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br/>
                    <div className="content-block-bridal-party-animals-note">
                        Elizabeth and Piotr feel very passionately about rescuing animals.
                        <br/>As part of the wedding, we will make donation to the
                        <a href="https://www.amazon.com/gp/registry/wishlist/21TGH98XRJHJC"
                           className="content-block-bridal-party-mspca-link" target="_blank" rel="noopener noreferrer">
                            {MSPCA}.
                        </a>
                    </div>


                </div>
            </div>
        );
    }
}

export default BridalParty;
