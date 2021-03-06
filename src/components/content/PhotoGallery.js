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
import DC from '../../img/photo-gallery/2017, April, DC.JPG'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                new this.ImageWrapper(WestF2007, "Elizabeth & Piotr first met at a party he threw their Freshmen Year.", 2007)
                , new this.ImageWrapper(NJBoardwalk2008, "Piotr loves Elizabeth's smile and is continually thinking of new ways to see it.", 2008)
                , new this.ImageWrapper(ApplePicking2008, "Elizabeth loves Piotr's quick wit and endless affection.", 2008)
                , new this.ImageWrapper(Snowball2010, "The pair were close friends throughout college.", 2010)
                , new this.ImageWrapper(Bruins2011, "Piotr introduced Elizabeth to hockey and brought her to her first game!", 2011)
                , new this.ImageWrapper(Anniversary2011, "They officially became a couple on March 22, 2011!", 2011)
                , new this.ImageWrapper(NEUGraduation2012, "The couple graduated from Northeastern University in May 2012!", 2012)
                , new this.ImageWrapper(EzeParty2012, "The couple quickly learned to adjust to life outside of college.", 2012)
                , new this.ImageWrapper(March2012, "They celebrated their first anniversary with front row tickets to their favorite team.", 2012)
                , new this.ImageWrapper(Vegas2013, "Their first vacation together was to Las Vegas, NV!", 2013)
                , new this.ImageWrapper(Beanpot2013, "They have such fond memories of Northeastern and are always happy to return to campus.", 2013)
                , new this.ImageWrapper(Eze2014, "Elizabeth enjoys accompanying Piotr to work events and seeing how creatively he solves problems!", 2013)
                , new this.ImageWrapper(Graduation2014, "Piotr loves how Elizabeth is always challenging herself to learn something new.", 2014)
                , new this.ImageWrapper(BK2015, "In 2015, the couple began planning their move to NYC.", 2015)
                , new this.ImageWrapper(Brooklyner2015, "After moving to Brooklyn, they discovered the joys of having a roof deck.", 2015)
                , new this.ImageWrapper(Vegas2016, "The couple love to travel - whether it be exploring new cities, states or countries.", 2016)
                , new this.ImageWrapper(PopPop90th2016, "Piotr's favorite destination thus far has been Canada and Elizabeth's was The Grand Canyon!", 2016)
                , new this.ImageWrapper(ApplePicking2016, "The two enjoy keeping family traditions - like apple picking every fall!", 2016)
                , new this.ImageWrapper(Hershey2016, "Another tradition they celebrate is going to Hershey, PA every Christmas!", 2016)
                , new this.ImageWrapper(NYE2017, "Elizabeth & Piotr rang in 2017 with family and friends. Piotr said it was going to be their best year yet!", 2017)
                , new this.ImageWrapper(Engagment, "On February 18, Piotr proposed to Elizabeth on their roof while watching the sunset!", 2017)
                , new this.ImageWrapper(Engaged2017, "They spent the weekend celebrating and sharing their big news with family and friends!", 2017)
                , new this.ImageWrapper(Planning2017, "Elizabeth was delighted to spend the Summer of 2017 planning their wedding!", 2017)
                , new this.ImageWrapper(Romantic, "She cant wait to marry the love of her life in November 2018 and is most looking forward to their First Look!", 2017)
                , new this.ImageWrapper(DC, "Piotr is most looking forward to celebrating with all of their family and friends in one room!", 2017)
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
            this.setState((prevState, props) => ({
                currentImageIndex: newIndex
            }));
        }
    }

    //https://www.reddit.com/r/reactjs/comments/4o6hev/how_does_image_preloading_in_react_work/
    // Preload images at the earliest possible lifecycle event
    componentDidMount() {
        this.state.images.forEach((src) => {
            const img = document.createElement('img');
            img.src = src.image; // Assigning the img src immediately requests the image
        });
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
                    <div className="content-block-text-photo-gallery-year">
                        {this.getYear()}
                    </div>
                    <br/>
                    <input type="range" min="0" max={this.state.images.length - 1} step="1"
                           value={this.state.currentImageIndex} onChange={event => this.setImage(event)}/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
