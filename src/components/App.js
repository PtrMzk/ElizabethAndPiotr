import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import '../stylesheets/App.css';
import ContentWrapper from "./ContentWrapper";
import NavigationWrapper from "./NavigationWrapper";
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        //<Route path="/BigDay" component={() => (<ContentWrapper scrollTarget="BigDay" />)}/>
        return (
            <Router>
                <div className="app">
                    <div className="navigation">
                        <NavigationWrapper/>
                    </div>
                    <div className="content">
                        <Route exact= {true} path="/" component={ContentWrapper}/>
                        <Route path="/:scrollTarget" component={ContentWrapper}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
