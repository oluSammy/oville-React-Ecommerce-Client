import { firestore } from "../../firebase/firebase.utils";

const { categoryActionTypes } = require("./category.types");


const getCategoryStart = () => ({
    type: categoryActionTypes.GET_CATEGORY_START
});

const getCategorySuccess = categories => ({
    type: categoryActionTypes.GET_CATEGORY_SUCCESS,
    payload: categories
});

const getCategoryFailure = error => ({
    type: categoryActionTypes.GET_CATEGORY_FAILURE,
    payload: error
});

export const asyncGetCategory = () => {
    return async dispatch => {
        try {
            dispatch(getCategoryStart());

            let categoryNames = [];
            const categoryRef = firestore.collection('categories');
            const categories = await categoryRef.get();
            categories.docs.forEach(doc => {
                categoryNames.push(doc.data());
            });

            dispatch(getCategorySuccess(categoryNames));

        } catch (error) {
            dispatch(getCategoryFailure(error));
        }
    }
}

