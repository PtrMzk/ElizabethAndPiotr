import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import reducer from './reducers';
import {createStore} from "redux";

const store = configureStore();
console.log("store created");
//store.dispatch({type: "ADD_COMPONENT_BOX", payload: 5});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

