import { createSelector } from 'reselect';

const selectReviews = state => state.reviews;

export const selectIsAddingReviewsSlice = createSelector(
    [selectReviews],
    reviews => reviews.isAddingReview
);

export const selectIsGettingReviews = createSelector(
    [selectReviews],
    reviews => reviews.isGettingReviews
);

export const selectReviewsSlice = createSelector(
    [selectReviews],
    reviews => reviews.reviews
);

export const selectIsReviewsEmpty = createSelector(
    [selectReviews],
    reviews => reviews.reviewIsEmpty
);