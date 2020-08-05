import { productDetailActionTypes } from './product-detail.types';
import { firestore } from '../../firebase/firebase.utils';

const getProductDetailStart = () => ({
    type: productDetailActionTypes.GET_PRODUCT_DETAIL_START
});

const getProductDetailSuccess = (productDetail) => ({
    type: productDetailActionTypes.GET_PRODUCT_DETAIL_SUCCESS,
    payload: productDetail
});

const getProductDetailFailure = (error) => ({
    type: productDetailActionTypes.GET_PRODUCT_DETAIL_FAILURE,
    payload: error
});

export const asyncGetProductDetail = (productId) => {
    return async dispatch => {
        try {
            dispatch(getProductDetailStart());

            const productRef = firestore.collection('products').doc(`${productId}`);
            const productDetail = await productRef.get();
            dispatch(getProductDetailSuccess(productDetail.data()));

         } catch (error) {
            dispatch(getProductDetailFailure(error))
         }
    }
}