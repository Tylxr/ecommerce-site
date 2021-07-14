export default (state = [], payload) => {
    switch (payload.type) {
        case "Add":
            return [...state, payload.item];
        default:
            return state;
    }
};