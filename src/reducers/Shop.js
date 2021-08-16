import productJson from '../products';

//'Randomly' pick a product to load with
const initialProductIndex = Math.floor(Math.random() * productJson.length);
const selectedProduct = productJson.splice(initialProductIndex, 1)[0];
const INITIAL_STATE = {
    products: productJson,
    selectedProduct,
    recentlyViewedIds: productJson.map(x => x._id)
};

export default (state = INITIAL_STATE, action) => {
    // switch (action.type) {
    //     case "test":
    //         return {
    //             ...state,
    //             products: [
    //                 {
    //                     a: 1
    //                 }
    //             ]
    //         }
    //     default:
    //         return state;
    // }

    return state;
};