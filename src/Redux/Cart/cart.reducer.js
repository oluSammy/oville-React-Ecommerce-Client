import { cartActionTypes } from './cart.types';
import { addNewCartItem, cartReduction, emptyCartItems } from './cart.utils';

const INIT_STATE = {
    cart: []
}

export const cartReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cart: addNewCartItem(state.cart, action.payload)
            }
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
            }
        case cartActionTypes.REDUCE_CART_ITEM: 
            return {
                ...state,
                cart: cartReduction(state.cart, action.payload)
            }
        case cartActionTypes.EMPTY_CART: 
            return {
                ...state,
                cart: []
            }
        default: 
            return state;
    }
}