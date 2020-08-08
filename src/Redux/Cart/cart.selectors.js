import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartSlice = createSelector(
    [selectCart],
    cart => cart.cart
);

export const selectCartItemsCount = createSelector(
    [selectCartSlice],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity,
        0
    )
);

export const selectCartGrandTotal = createSelector(
    [selectCartSlice],
    cartItems => cartItems.reduce((acc, cartItem) => 
        acc + cartItem.subTotal,
        0
    )
)