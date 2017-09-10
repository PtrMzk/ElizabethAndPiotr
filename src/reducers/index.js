import {combineReducers} from 'redux';
import componentBoxReducer from './componentBoxReducer';
import navigationButtonReducer from './navigationButtonReducer';

const rootReducer = combineReducers(
    {
        componentBoxReducer,
        navigationButtonReducer
    }
);

export default rootReducer