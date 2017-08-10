import React, {Component} from 'react';
import '../../stylesheets/Content.css';
import BigDayImage from '../../img/big-day.jpg';

class BigDay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-block-wrapper">
                <div className="content-block-text-left">
                    <div className="content-block-image-left">
                        <img src={BigDayImage}
                             className="content-block-image-big-day content-block-image-rounded" alt="Liz and Piotr in Black and White"/>
                    </div>
                    <div className="content-block-title">
                        Big Day Details
                    </div>

                    We would like to thank you all so much for journeying to celebrate this special day with us - especially all of our out of town guests!
                    We know what traveling entails and can not express how much this means to us! We are so greatly looking forward to celebrating our love with you!


                    <br/><h3>Accommodations</h3>
                    We have reserved a block of rooms at The Olde Mill Inn! You can reserve a room by calling the hotel and asking for the Lipman-Mikolajczyk Wedding! Please be advised that we have a limited number of rooms and strongly encourage you to book early in order to guarantee a spot in this hotel!

                    <br/><h3>Transportation</h3>
                    Public transportation:
                    <br/>The hotel can be accessed via NJ Transit trains. The venue is a short distance from the Bernardsville stop on the Morris & Essex line. This provides our guests with direct access to NYC and can be reached via Penn Station.


                    <br/><br/>Nearest Airport:
                    <br/>Newark Liberty International Airport (EWR) <br/>3 Brewster Rd, Newark, NJ 07114

                    <br/><br/>Driving Directions:
                    <br/> The Olde Mill Inn is located off of Route 287, Exit 30B. Bear right off the exit and you will find the property immeadiately following on the right hand side prior to the intersection.

                </div>


            </div>
        );
    }
}

export default BigDay;
