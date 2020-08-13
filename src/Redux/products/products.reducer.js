import { productsActionTypes } from './products.types';

const INIT_STATE = {
    isGettingProductHighLights: false,
    productHighlights: null,
    getProductHighlightsError: '',
    isGettingShopProducts: false,
    shopProducts: null,
    getShopProductsError: ''
};

const productsReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case productsActionTypes.GET_PRODUCTS_HIGHLIGHT_START:
            return {
                ...state,
                isGettingProductHighLights: true
            }
        case productsActionTypes.GET_PRODUCTS_HIGHLIGHT_SUCCESS:
            return {
                ...state,
                isGettingProductHighLights: false,
                productHighlights: action.payload
            }
        case productsActionTypes.GET_PRODUCTS_HIGHLIGHT_FAILURE:
            return {
                ...state,
                isGettingProductHighLights: false,
                getProductHighlightsError: action.payload
            }
        case productsActionTypes.GET_SHOP_PRODUCTS_START:
            return {
                ...state,
                isGettingShopProducts: true,
            }
        case productsActionTypes.GET_SHOP_PRODUCTS_SUCCESS: 
            return {
                ...state,
                isGettingShopProducts: false,
                shopProducts: action.payload
            }
        case productsActionTypes.GET_SHOP_PRODUCTS_FAILURE:
            return {
                ...state,
                isGettingShopProducts: false,
                getShopProductsError: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;
