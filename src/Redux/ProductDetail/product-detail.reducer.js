import { productDetailActionTypes } from './product-detail.types';

const INIT_STATE = {
    isGettingProductDetail: false,
    productDetail: '',
    getProductDetailErrorMsg: ''
}

const productDetailReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case productDetailActionTypes.GET_PRODUCT_DETAIL_START:
            return {
                ...state,
                isGettingProductDetail: true
            }
        case productDetailActionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isGettingProductDetail: false,
                productDetail: action.payload
            }
        case productDetailActionTypes.GET_PRODUCT_DETAIL_FAILURE:
            return {
                ...state,
                isGettingProductDetail: false,
                getProductDetailErrorMsg: action.payload
            }
        default:
            return state;
    }
}

export default productDetailReducer;
