import { purchaseItemActionTypes } from '../../Redux/Purchase-Item/purchaseItem.types';

const INIT_STATE = {
    isGettingPurchaseItem: false,
    totalPrice: 1,
    quantity: 1,
    unitPrice: 0,
    getPurchaseItemErr: '',
    purchaseItem: ''
}

const purchaseItemReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case purchaseItemActionTypes.GET_PURCHASE_ITEM_START:
            return {
                ...state,
                isGettingPurchaseItem: true
            }
        case purchaseItemActionTypes.GET_PURCHASE_ITEM_SUCCESS:
            return {
                ...state,
                isGettingPurchaseItem: false,
                purchaseItem: action.payload
            }
        case purchaseItemActionTypes.SET_PRICE:
            return {
                ...state,
                unitPrice: action.payload,
                totalPrice: action.payload
            }
        case purchaseItemActionTypes.GET_PURCHASE_ITEM_FAILURE:
            return {
                ...state,
                isGettingPurchaseItem: false,
                getPurchaseItemErr: action.payload
            }
        case purchaseItemActionTypes.INCREMENT_ITEM_QUANTITY:
            return {
                ...state,
                quantity: state.quantity + 1,
                totalPrice: (state.quantity + 1) * state.unitPrice
            }
        case purchaseItemActionTypes.DECREMENT_ITEM_QUANTITY:
            return {
                ...state,
                quantity: state.quantity === 1 ? state.quantity : state.quantity - 1,
                totalPrice: state.quantity === 1 ? state.totalPrice : (state.quantity - 1) * state.unitPrice 
            }
        default:
            return state;
    }
}

export default purchaseItemReducer;