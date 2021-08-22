import productJson from '../products';
import { CHANGE_PRODUCT, TOGGLE_PRODUCT_MODAL } from './types';

//'Randomly' pick a product to load with
const initialProductIndex = Math.floor(Math.random() * productJson.length);
const remainingProducts = [...productJson];
const selectedProduct = remainingProducts.splice(initialProductIndex, 1)[0];

//Initial shop state
const INITIAL_STATE = {
    products: remainingProducts,
    selectedProduct,
    recentlyViewedIds: remainingProducts.map(x => x._id),
    showProductModal: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_PRODUCT:
            return {
                ...state,
                products: productJson.filter(x => x._id !== action.payload),
                selectedProduct: productJson.find(x => x._id === action.payload),
                recentlyViewedIds: [state.selectedProduct._id, ...state.recentlyViewedIds.filter(x => x !== action.payload)]
            };
        case TOGGLE_PRODUCT_MODAL:
            return {
                ...state,
                showProductModal: action.payload
            };
        default:
            return state;
    }

};