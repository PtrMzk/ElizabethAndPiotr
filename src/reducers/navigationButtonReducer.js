import * as constants from '../actions/actionConstants'
import {UPDATE_ACTIVE_NAVIGATION_BUTTON} from "../actions/actionConstants";

const initialState = {
    activeButton: "Overview",
    navigationButtons: [
        new NavigationButtonWrapper("Event", "Overview")
        , new NavigationButtonWrapper("Story", "OurStory")
        , new NavigationButtonWrapper("Details", "BigDay")
        , new NavigationButtonWrapper("Party", "BridalParty")
        , new NavigationButtonWrapper("Registry", "Registries")
        , new NavigationButtonWrapper("Gallery", "PhotoGallery")
    ]
};

function NavigationButtonWrapper(name, link) {
    this.name = name;
    this.link = link;
}

export default function navigationButtonReducer (state = initialState, action){
    switch (action.type) {
        case UPDATE_ACTIVE_NAVIGATION_BUTTON: {
            return {...state, activeButton: action.payload};
        }
        default:
            return state;
    }
};
