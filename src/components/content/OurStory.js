import React, {Component} from 'react';
import '../../stylesheets/Content.css';
import OurStoryImage from '../../img/our-story.jpg';

class OurStory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-block-wrapper">
                <div className="content-block-text-left">
                    <div className="content-block-image-right">
                        <img src={OurStoryImage}
                             className="content-block-image-our-story" alt="Liz and Piotr in Black and White"/>
                    </div>
                    <div className="content-block-title">
                        Our Story
                    </div>
                    Elizabeth and Piotr first met via mutual friends at a party on September 8, 2007 during their first week at Northeastern University.
                    While there is some debate over who made the first move, the two quickly became inseparable as they explored their new school. <br/><br/>

                    Piotr claims he wooed Elizabeth with his face-melting guitar solos,
                    although she remembers being drawn in by his witty humor and their shared love of horror movies.
                    Elizabeth recalls charming Piotr with her dramatic storytelling,
                    although he swears it was her "exotic NJ accent" and dazzling smile.<br/><br/>

                    Regardless of the reason (and with the help of some exceedingly patient friends) the two began dating on March 22, 2011.
                    They spent the next few years happily living together in Boston!
                    After graduating college, Elizabeth began a career in teaching and Piotr became a software consultant.
                    They adopted two cats - Claire & Henry - who helped complete their little family!
                    In 2015, the couple decided to embark on a new adventure in a new city and moved to Brooklyn.<br/><br/>

                    On February 18, 2017, Piotr told Elizabeth that he was meeting some coworkers to complete a "big assignment".
                    In reality, he had arranged for her mom and sister to accompany him in a search for the perfect engagement ring.
                    After only a few hours, he returned home with a little black box and a big plan.
                    The couple went upstairs to their roof deck to watch the sunset and share a bottle of wine.
                    Piotr began talking about their love story and all the memories they had shared together as a couple.
                    Before she understood what was happening, he was down on one knee asking her to spend the rest of their lives together.
                    She immediately burst into tears and happily accepted!<br/><br/>

                    The couple are looking forward to publicly declaring their love in front of family and friends on November 3, 2018 at The Olde Mill Inn in Basking Ridge, NJ. <br/><br/>


                </div>


            </div>
        );
    }
}

export default OurStory;
