import * as constants from './actionConstants';

export function addComponentBox(componentBox) {
    return {
        type: constants.ADD_COMPONENT_BOX,
        payload: componentBox
    };
}

export function updateActiveComponentBox(componentBoxInScope) {
    return {
        type: constants.UPDATE_ACTIVE_COMPONENT_BOX,
        payload: componentBoxInScope
    }
}

export function getComponentBoxes() {
    return {
        type: constants.GET_COMPONENT_BOXES,
        payload: null
    }
}

export function clearComponentBoxes(){
    return{
        type: constants.CLEAR_COMPONENT_BOXES,
        payload: null
    }
}

