/**
 * For demo purposes, the following decisions r.e. scope have been made:
 *  - The user is logged in
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
        default:
            return state;
    }
}