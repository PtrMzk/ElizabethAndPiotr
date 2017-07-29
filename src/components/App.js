import React, {Component} from 'react';
import '../stylesheets/Navigation.css';
import '../stylesheets/App.css';
import ContentWrapper from "./ContentWrapper";
import NavigationWrapper from "./NavigationWrapper";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="navigation">
                    <NavigationWrapper/>
                </div>
                <div className="content">
                    <ContentWrapper/>
                </div>
            </div>
        );
    }
}

export default App;
