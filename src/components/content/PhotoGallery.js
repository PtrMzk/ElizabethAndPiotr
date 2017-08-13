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
import ApplePicking2016 from '../../img/photo-gallery/2016, October, Apple Picking.JPG'
import FranklinWedding2017 from '../../img/photo-gallery/2017, August, Franklin Wedding.JPG'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                new this.ImageWrapper(WestF2007, "Liz & Piotr first meet at a party he threw to celebrate the start of college.", 2007)
                , new this.ImageWrapper(NJBoardwalk2008, "Piotr loves Elizabeth's smile and is continually thinking of new ways to see it.", 2008)
                , new this.ImageWrapper(ApplePicking2008, "Elizabeth loves Piotr's quick wit and endless affection.", 2008)
                , new this.ImageWrapper(Snowball2010, "The two like to debate who actually made the first move. The verdict is still out...", 2009)
                , new this.ImageWrapper(Bruins2011, "Piotr brought Elizabeth to her first college hockey game and later introduced her to the Bruins.", 2011)
                , new this.ImageWrapper(Anniversary2011, "The couple began officially dating on March 22, 2011", 2011)
                , new this.ImageWrapper(EzeParty2012, "From kegs to cocktails, the couple learn to adjust to life outside of college.", 2012)
                , new this.ImageWrapper(March2012, "Elizabeth surprised Piotr with front row tickets to celebrate their first anniversary.", 2012)
                , new this.ImageWrapper(Vegas2013, "The couple take their first vacation together to Las Vegas!", 2013)
                , new this.ImageWrapper(Beanpot2013, "Always happy to return to campus, the couple frequently attend Northeastern Alumni events.", 2013)
                , new this.ImageWrapper(Graduation2014, "Piotr was Elizabeth's biggest supporter throughout graduate school.", 2014)
                , new this.ImageWrapper(Brooklyner2015, "The couple move to Brooklyn! One of their favorite things to do is enjoy the view from their roof deck.", 2015)
                , new this.ImageWrapper(PopPop90th2016, "Celebrating ", 2016)
                , new this.ImageWrapper(ApplePicking2016, "apple picing 2016", 2016)
                , new this.ImageWrapper(FranklinWedding2017, "FranklinWedding", 2017)

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

        console.log(event.target.value);
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
                    <h3>{this.getCaption()}</h3>
                    <br/>
                    <input type="range" min="0" max={this.state.images.length - 1} step="1"
                           value={this.state.currentImageIndex} onChange={event => this.setImage(event)}/>
                    <br/>
                    <h1>{this.getYear()}</h1>
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
