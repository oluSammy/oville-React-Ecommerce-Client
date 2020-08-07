import { createSelector } from 'reselect';

const selectPurchaseItem = state => state.purchaseItem;

export const isGettingPurchaseItem = createSelector(
    [selectPurchaseItem],
    purchaseItem => purchaseItem.isGettingPurchaseItem
);

export const selectPurchaseItemSlice = createSelector(
    [selectPurchaseItem],
    purchaseItem => purchaseItem.purchaseItem
);

export const selectPurchaseQuantitySlice = createSelector(
    [selectPurchaseItem],
    purchaseItem => purchaseItem.quantity
);

export const selectUnitPrice = createSelector(
    [selectPurchaseItem],
    purchaseItem => purchaseItem.unitPrice
);

export const selectTotalPrice = createSelector(
    [selectPurchaseItem],
    purchaseItem => purchaseItem.totalPrice
);

