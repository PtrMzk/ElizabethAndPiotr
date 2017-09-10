import * as constants from '../actions/actionConstants'

const initialState = {
    componentBoxes: [],
    activeBox: ""
};

export default function componentBoxReducer (state = initialState, action){
    console.log(state);
    switch (action.type) {
        case constants.ADD_COMPONENT_BOX: {
            return {...state, componentBoxes: [...state.componentBoxes, action.payload]}
        }
        case constants.CLEAR_COMPONENT_BOXES: {
            state.componentBoxes=[];
            return state;
        }
        case constants.UPDATE_ACTIVE_COMPONENT_BOX:{
            return {...state, activeBox: action.payload};
        }
        default:
            return state;
    }
};
