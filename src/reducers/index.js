import {combineReducers} from 'redux';
import componentBoxReducer from './componentBoxReducer';

const rootReducer = combineReducers(
    {        componentBoxReducer
    }
    );

export default rootReducer