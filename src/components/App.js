import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import '../stylesheets/App.css';
import ContentWrapper from "./ContentWrapper";
import NavigationWrapper from "./NavigationWrapper";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavigationFooter from "./NavigationFooter";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="navigation">
                        <NavigationWrapper/>
                    </div>
                    <div className="content">
                        <Route exact= {true} path="/" component={ContentWrapper} store={this.props.store}/>
                        <Route path="/:scrollTarget" component={ContentWrapper} store={this.props.store}/>
                    </div>
                    <div className="footer">
                        <NavigationFooter/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
