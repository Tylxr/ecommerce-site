import productJson from '../products';

//'Randomly' pick a product to load with
const initialProductIndex = Math.floor(Math.random() * productJson.length);
const selectedProduct = productJson.splice(initialProductIndex, 1);
const INITIAL_STATE = {
    products: productJson,
    selectedProduct
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