import React, {Component} from 'react';
import '../../stylesheets/Content.css';

class WeddingOverview extends Component {
    constructor(props) {
        super(props);
        this.getDaysToWedding = this.getDaysToWedding.bind(this);
        this.state = {
            daysToWedding: this.getDaysToWedding()
        }
        ;
    }

    getDaysToWedding() {
        var days = 0;
        var difference = 0;

        var weddingDay = new Date("2018-11-03");

        var today = new Date();
        //var today = new Date("2018-11-04");

        difference = weddingDay - today;

        days = Math.round(difference / (1000 * 60 * 60 * 24));

        if (days > 0)
            return days;
        else
            return 0;
    }

    render() {
        return (
            <div className="content-block-wrapper content-block-wrapper-padded">
                <div className="content-block-text-center">
                    <div className="content-block-title">
                        Our Wedding Day
                    </div>
                    <h3>Date</h3>
                    Saturday, November 3, 2018
                    <br/>5:00 PM

                    <h3>Ceremony and Reception</h3>
                    The Olde Mill Inn
                    <br/>225 Route 202 Basking Ridge, NJ 07920
                    <br/>800-585-4461 | 908-221-1100

                    <br/> <h1> {this.state.daysToWedding} {this.state.daysToWedding === 1? "Day" : "Days"} to go!!!</h1>
                </div>
            </div>
        );
    }
}

export default WeddingOverview;
