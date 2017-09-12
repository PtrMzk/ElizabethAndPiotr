import * as constants from '../actions/actionConstants'

const initialState = {
    activeButton: "",
    navigationButtons: [
        new NavigationButtonWrapper("Event", "Overview")
        , new NavigationButtonWrapper("Story", "OurStory")
        , new NavigationButtonWrapper("Gallery", "PhotoGallery")
        , new NavigationButtonWrapper("Details", "BigDay")
        , new NavigationButtonWrapper("Party", "BridalParty")
        , new NavigationButtonWrapper("Registry", "Registries")
    ]
};

function NavigationButtonWrapper(name, link) {
    this.name = name;
    this.link = link;
}

export default function navigationButtonReducer (state = initialState, action){
    switch (action.type) {
        case constants.UPDATE_ACTIVE_NAVIGATION_BUTTON: {
            return {...state, activeButton: action.payload};
        }
        default:
            return state;
    }
};
