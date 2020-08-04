import { productsActionTypes } from './products.types';

const INIT_STATE = {
    isGettingProductHighLights: false,
    productHighlights: null,
    getProductHighlightsError: ''
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
        default:
            return state;
    }
}

export default productsReducer;
