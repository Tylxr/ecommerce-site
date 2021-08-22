import { TOGGLE_ADD_TO_FAVOURITES, TOGGLE_ADD_TO_BASKET } from "./types";

/**
 * For demo purposes, the following decisions r.e. scope have been made:
 *  - The user is logged in (unused)
 *  - Only product ids are being stored in favourites and the basket
 *  - Product quantities are not being stored / handled
 */

const INITIAL_STATE = {
    isLoggedIn: true,
    favourites: [],
    basket: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: toggleElementInList(state.favourites, action.payload)
            };
        case TOGGLE_ADD_TO_BASKET:
            return {
                ...state,
                basket: toggleElementInList(state.basket, action.payload)
            }
        default:
            return state;
    }
}

//Push the new id if it doesn't exist in the list, otherwise remove it
function toggleElementInList(list, id) {
    return list.includes(id)
        ? list.filter(x => x !== id)
        : [...list, id];
}