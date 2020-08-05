import { createSelector } from 'reselect';

const selectProductDetail = state => state.productDetail;

export const selectProductDetailSlice = createSelector(
    [selectProductDetail],
    productDetail => productDetail.productDetail
);

export const isGettingProductDetailSlice = createSelector(
    [selectProductDetail],
    productDetail => productDetail.isGettingProductDetail
)
