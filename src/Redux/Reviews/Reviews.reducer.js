import { reviewsActionTypes } from './Reviews.types';

const INIT_STATE = {
    isGettingReviews: false,
    reviews: [],
    getReviewsErrorMsg: '',
    isAddingReview: false,
    addReviewErrorMsg: '',
    reviewIsEmpty: false
}

const ReviewReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case reviewsActionTypes.GET_REVIEWS_START:
            return {
                ...state,
                isGettingReviews: true
            }
        case reviewsActionTypes.GET_REVIEWS_SUCCESS:
            return {
                ...state,
                isGettingReviews: false,
                reviews: [...action.payload]
            }
        case reviewsActionTypes.GET_REVIEWS_FAILURE:
            return {
                ...state,
                isGettingReviews: false,
                getReviewsErrorMsg: action.payload
            }
        case reviewsActionTypes.ADD_REVIEW_START: 
            return {
                ...state,
                isAddingReview: true
            }
        case reviewsActionTypes.ADD_REVIEW_SUCCESS:
            return {
                ...state,
                isAddingReview: false
            }
        case reviewsActionTypes.ADD_REVIEW_FAILURE:
            return {
                ...state,
                isAddingReviews: false,
                addReviewErrorMsg: action.payload
            }
        case reviewsActionTypes.GET_REVIEWS_EMPTY:
            return {
                ...state,
                reviewIsEmpty: true
            }
        default:
            return state
    }
};

export default ReviewReducer;
