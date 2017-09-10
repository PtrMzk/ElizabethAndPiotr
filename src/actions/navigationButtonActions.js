import * as constants from './actionConstants';


export function updateActiveNavigationButton(navigationButtonName) {
    return {
        type: constants.UPDATE_ACTIVE_NAVIGATION_BUTTON,
        payload: navigationButtonName
    }
}

