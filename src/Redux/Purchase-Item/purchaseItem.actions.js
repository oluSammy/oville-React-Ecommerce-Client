import { firestore } from '../../firebase/firebase.utils';
import { purchaseItemActionTypes } from '../../Redux/Purchase-Item/purchaseItem.types';

const getPurchaseItemStart = () => ({
    type: purchaseItemActionTypes.GET_PURCHASE_ITEM_START
});

const getPurchaseItemSuccess = purchaseItem => ({
    type: purchaseItemActionTypes.GET_PURCHASE_ITEM_SUCCESS,
    payload: purchaseItem
});

const getPurchaseItemFailure = error => ({
    type: purchaseItemActionTypes.GET_PURCHASE_ITEM_FAILURE,
    payload: error
});

 const setPrice = price => ({
    type: purchaseItemActionTypes.SET_PRICE,
    payload: price
});

export const IncrementPurchaseItem = () => {
    return {
        type: purchaseItemActionTypes.INCREMENT_ITEM_QUANTITY
    }
}

export const decrementPurchaseItem = () => {
    return {
        type: purchaseItemActionTypes.DECREMENT_ITEM_QUANTITY
    }
}

export const asyncGetPurchaseItem = id => {
    return async dispatch => {
        dispatch(getPurchaseItemStart());

        try {
            const purchaseItemRef = firestore.collection('products').doc(`${id}`);
            const purchaseItem = await purchaseItemRef.get();
            dispatch(getPurchaseItemSuccess(purchaseItem.data()));
            dispatch(setPrice(purchaseItem.data().price));

        } catch (error) {
            dispatch(getPurchaseItemFailure(error));
        }
    }
}

