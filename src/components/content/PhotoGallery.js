import React, {Component} from 'react';
import '../../stylesheets/Content.css';
import '../../stylesheets/Content-Slider.css';
import WestF2007 from '../../img/photo-gallery/2007,West F.JPG';
import NJBoardwalk2008 from '../../img/photo-gallery/2008, July, NJ Boardwalk.JPG';
import ApplePicking2008 from '../../img/photo-gallery/2008, October, NJ Apple Picking.JPG'
import Snowball2010 from '../../img/photo-gallery/2010, January, Snow Ball.JPG'
import Bruins2011 from '../../img/photo-gallery/2011, June, Bruins Victory.JPG'
import Anniversary2011 from '../../img/photo-gallery/2011, September, Anniversary.jpg'
import EzeParty2012 from '../../img/photo-gallery/2012, December, EZE Party.JPG'
import March2012 from '../../img/photo-gallery/2012, March.jpg'
import Vegas2013 from '../../img/photo-gallery/2013, April, First Vacation to Vegas.JPG'
import Beanpot2013 from '../../img/photo-gallery/2013, February, Beanpot Alumni.jpg'
import Graduation2014 from '../../img/photo-gallery/2014, May, Graduation.jpg'
import Brooklyner2015 from '../../img/photo-gallery/2015, July, Brooklyner.JPG'
import PopPop90th2016 from '../../img/photo-gallery/2016, July, Poppops 90.jpg'
import Romantic from '../../img/photo-gallery/2016, February, Valentines Day.jpg'
import ApplePicking2016 from '../../img/photo-gallery/2016, October, Apple Picking.JPG'
import NEUGraduation2012 from '../../img/photo-gallery/2012, May, Graduation.jpg'
import Eze2014 from '../../img/photo-gallery/2014, November, Holiday Party.JPG'
import BK2015 from '../../img/photo-gallery/2015, June, Move to BK.JPG'
import Vegas2016 from '../../img/photo-gallery/2016, June, Vegas.JPG'
import Hershey2016 from '../../img/photo-gallery/2016, December, Hershey.JPG'
import NYE2017 from '../../img/photo-gallery/2017, January, New Years.JPG'
import Engagment from '../../img/photo-gallery/2017, February, Engaged 1.JPG'
import Engaged2017 from '../../img/photo-gallery/2017, February, Engaged.jpg'
import Planning2017 from '../../img/photo-gallery/2017, June, Wedding Planning.JPG'
import Romantic2 from '../../img/photo-gallery/2016, November, NYC.JPG'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                new this.ImageWrapper(WestF2007, "Liz & Piotr first met at a party he threw to celebrate the start of college.", 2007)
                , new this.ImageWrapper(NJBoardwalk2008, "Piotr loves Elizabeth's smile and is continually thinking of new ways to see it.", 2008)
                , new this.ImageWrapper(ApplePicking2008, "Elizabeth loves Piotr's quick wit and endless affection.", 2008)
                , new this.ImageWrapper(Snowball2010, "After meeting, the two remained close friends throughout college.", 2009)
                , new this.ImageWrapper(Bruins2011, "In college, Piotr introduced Elizabeth to hockey! " +
                    "They celebrated the Bruin's Stanley Cup win with a dip in the Reflection Pool.", 2011)
                , new this.ImageWrapper(Anniversary2011, "The couple began officially dating on March 22, 2011!", 2011)
                , new this.ImageWrapper(NEUGraduation2012, "The couple graduated from Northeastern University in May 2012!", 2012)
                , new this.ImageWrapper(EzeParty2012, "From kegs to cocktails, the couple quickly learned to adjust to life outside of college.", 2012)
                , new this.ImageWrapper(March2012, "They celebrated their first anniversary with front row tickets to their favorite team.", 2012)
                , new this.ImageWrapper(Vegas2013, "They took their first vacation together in April and visited Las Vegas, NV!", 2013)
                , new this.ImageWrapper(Beanpot2013, "They are always happy to return to campus as Alumni and support their school.", 2013)
                , new this.ImageWrapper(Eze2014, "Elizabeth enjoys accompanying Piotr to work events and learning more about what he does.", 2013)
                , new this.ImageWrapper(Graduation2014, "Piotr encouraged Elizabeth throughout graduate school and visits her classroom as often as he can.", 2014)
                , new this.ImageWrapper(BK2015, "In 2015, the couple felt they were ready for a change in cities and began planning their move to NYC.", 2015)
                , new this.ImageWrapper(Brooklyner2015, "They moved into their new apartment in June and quickly discovered the joys of having a roof deck.", 2015)
                , new this.ImageWrapper(Vegas2016, "The couple love to travel - whether it be exploring new cities, new states or new countries.", 2016)
                , new this.ImageWrapper(PopPop90th2016, "Piotr's favorite destination thus far has been Canada and Elizabeth's was The Grand Canyon!", 2016)
                , new this.ImageWrapper(ApplePicking2016, "The two enjoy family traditions as well - like apple picking every fall!", 2016)
                , new this.ImageWrapper(Hershey2016, "Another tradition they celebrate is going to Hershey, PA every Christmas!", 2016)
                , new this.ImageWrapper(NYE2017, "Elizabeth & Piotr rang in 2017 with family and friends. Piotr told her it would be their best year yet!", 2017)
                , new this.ImageWrapper(Engagment, "On February 18th Piotr proposed to Elizabeth while watching the sunset from their roof deck!", 2017)
                , new this.ImageWrapper(Engaged2017, "Elizabeth joyfully accepted! They spent the weekend celebrating and sharing their big news!", 2017)
                , new this.ImageWrapper(Planning2017, "Elizabeth was delighted to spend the Summer of 2017 planning their wedding!", 2017)
                , new this.ImageWrapper(Romantic, "She cant wait to marry the love of her life in November 2018!", 2017)
                , new this.ImageWrapper(Romantic2, "Piotr is most looking forward celebrating with all of their family and friends in one room!", 2017)
            ]
            , currentImageIndex: 0
        };

        this.getImage = this.getImage.bind(this);
        this.getCaption = this.getCaption.bind(this);
        this.setImage = this.setImage.bind(this);
        this.ImageWrapper = this.ImageWrapper.bind(this);
        this.getYear = this.getYear.bind(this);
    }

    ImageWrapper(image, caption, year) {
        this.image = image;
        this.caption = caption;
        this.year = year;
    }

    getImage() {
        let arrayIndex = this.state.currentImageIndex;
        let images = this.state.images;

        return images[arrayIndex].image;
    }

    getCaption() {
        let arrayIndex = this.state.currentImageIndex;
        let images = this.state.images;

        return images[arrayIndex].caption;
    }

    getYear() {
        let arrayIndex = this.state.currentImageIndex;
        let images = this.state.images;

        return images[arrayIndex].year;
    }

    setImage(event) {
        let images = this.state.images;
        let newIndex = 0;

        let input = event.target.value;


        if (input !== this.state.currentImageIndex && input < images.length) {
            newIndex = input;
            console.log("New Index: " + newIndex);
            this.setState((prevState, props) => ({
                currentImageIndex: newIndex
            }));
        }
    }

    render() {
        return (
            <div className="content-block-wrapper">
                <div className="content-block-text-center">
                    <div className="content-block-title">
                        Photo Gallery
                    </div>
                    <img src={this.getImage()}
                         className="content-block-image-photo-gallery content-block-image-rounded"
                         alt={this.getCaption()}/>
                    <div className="content-block-text-photo-gallery-caption">
                        {this.getCaption()}
                    </div>
                    <br/>
                    <input type="range" min="0" max={this.state.images.length - 1} step="1"
                           value={this.state.currentImageIndex} onChange={event => this.setImage(event)}/>
                    <br/>

                    <div className="content-block-text-photo-gallery-year">
                        {this.getYear()}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
