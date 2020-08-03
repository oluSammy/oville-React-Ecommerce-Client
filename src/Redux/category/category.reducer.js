import { categoryActionTypes } from './category.types';

const INIT_STATE = {
    categories: null,
    isGettingCategory: false,
    getCategoryErrorMsg: ''
}

const categoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case categoryActionTypes.GET_CATEGORY_START:
            return {
                ...state,
                isGettingCategory: true
            }
        case categoryActionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                isGettingCategory: false,
                categories: action.payload
            }
        case categoryActionTypes.GET_CATEGORY_FAILURE:
            return {
                ...state,
                isGettingCategory: false,
                getCategoryErrorMsg: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer;
