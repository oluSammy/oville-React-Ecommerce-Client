import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectProductHighlightsSlice = createSelector(
    [selectProducts],
    products => products.productHighlights
);

export const selectIsGettingHighlights = createSelector(
    [selectProducts],
    products => products.isGettingProductHighLights
);
