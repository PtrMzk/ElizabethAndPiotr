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

        let weddingDay = new Date(2018, 11, 3, 0, 0, 0, 0);

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
                    Saturday, November 3, 2018
                    <br/>

                    <h3>Ceremony, Reception & After-Party</h3>
                    The Olde Mill Inn
                    <br/>225 Route 202 Basking Ridge, NJ 07920
                    <br/>800-585-4461 | 908-221-1100

                    <br/> <h1>
                    {countdownMessage}
                </h1>
                </div>
            </div>
        );
    }
}

export default WeddingOverview;
