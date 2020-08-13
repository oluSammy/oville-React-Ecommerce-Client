import { reviewsActionTypes } from './Reviews.types';
import { firestore, FieldValue } from '../../firebase/firebase.utils';
import swal  from 'sweetalert';

const getReviewStart = () => ({
    type: reviewsActionTypes.GET_REVIEWS_START
});

const getReviewsSuccess = reviews => ({
    type: reviewsActionTypes.GET_REVIEWS_SUCCESS,
    payload: reviews
});

const getReviewsFailure = error => ({
    type: reviewsActionTypes.GET_REVIEWS_FAILURE,
    payload: error
});

const getReviewsIsEmpty = () => ({
    type: reviewsActionTypes.GET_REVIEWS_EMPTY
})

export const asyncGetReviews = productId => {
    return async dispatch => {
        try {
            dispatch(getReviewStart());

            const productReviews = [];
            const reviewsRef = firestore.collection('reviews').where('productId', '==', `${productId}`);

            reviewsRef.onSnapshot( docSnapshot => {
                docSnapshot.docChanges().forEach(change => {
                    if (change.type === 'added'){
                        productReviews.push(change.doc.data());
                    }
                });
                dispatch(getReviewsSuccess(productReviews));
                if(productReviews.length === 0) {
                    dispatch(getReviewsIsEmpty());
                }
            });

            
            
        } catch (error) {
            dispatch(getReviewsFailure(error));
        }
    }
}

const addReviewStart = () => ({
    type: reviewsActionTypes.ADD_REVIEW_START
});

const addReviewSuccess = () => ({
    type: reviewsActionTypes.ADD_REVIEW_SUCCESS
});

const addReviewFailure = error => ({
    type: reviewsActionTypes.ADD_REVIEW_FAILURE,
    payload: error
});

export const asyncAddReview = (productId, review, user) => {
    
    return async dispatch => {
        try {
            dispatch(addReviewStart());

            const reviewRef = firestore.collection('reviews')
            await reviewRef.add({
                productId,
                review,
                createdAt: FieldValue,
                reviewBy: user
            });

            dispatch(addReviewSuccess());

        } catch (error) {
            dispatch(addReviewFailure(error));

            swal({
                title: "Error!",
                text: "An Error occurred, try again",
                icon: "warning",
                button: "ok",
            });
        }   
    }
}