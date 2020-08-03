import { createSelector } from 'reselect';

const selectCategories = state => state.category;

export const selectCategorySlice = createSelector(
    [selectCategories],
    category => category.categories
);

export const isGettingCategorySlice = createSelector(
    [selectCategories],
    category => category.isGettingCategory
)