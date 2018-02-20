import React, {Component} from 'react';
import '../../stylesheets/Content.css';

class WeddingOverview extends Component {
    constructor(props) {
        super(props);
        this.getDaysToWedding = this.getDaysToWedding.bind(this);
        this.getCountdownMessage = this.getCountdownMessage.bind(this);
    }

    getDaysToWedding() {
        let days = 0;
        let difference = 0;

        let weddingDay = new Date("11/03/2018");

        let today = new Date();

        difference = weddingDay - today;

        days = Math.ceil(difference / (1000 * 60 * 60 * 24));

        return days;
    }

    getCountdownMessage(daysToWedding) {
        let countdownMessage = "";

        if (daysToWedding > 1) {
            countdownMessage = (daysToWedding + " days to go!!");
        }
        else if (daysToWedding === 1) {
            countdownMessage = (daysToWedding + " day to go!");
        }
        else if (daysToWedding === 0) {
            countdownMessage = "Today is the day!";
        }
        else {
            countdownMessage = "Thank you for celebrating our love with us!";
        }

        return countdownMessage;
    }

    render() {
        let daysToWedding = this.getDaysToWedding();
        let countdownMessage = this.getCountdownMessage(daysToWedding);


        return (

            <div className="content-block-wrapper" ref="ourWeddingDay">
                <div className="content-block-text-center">
                    <div className="content-block-title">
                        Our Wedding Day
                    </div>

                    <h3>Date</h3>
                    The Evening of November 3rd, 2018
                    <br/><br/>

                    <h3>Ceremony and Reception</h3>
                    The Olde Mill Inn
                    <br/>225 Route 202 Basking Ridge, NJ 07920
                    <br/>800-585-4461 | 908-221-1100

                    <br/><br/> <h2>
                    {countdownMessage}
                </h2>
                </div>
            </div>
        );
    }
}

export default WeddingOverview;
