import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import categoryReducer from './category/category.reducer';
import productsReducer from './products/products.reducer';
import productDetailReducer from './ProductDetail/product-detail.reducer';
import ReviewReducer from './Reviews/Reviews.reducer';
import purchaseItemReducer from './Purchase-Item/purchaseItem.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['category', 'products']
}

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    products: productsReducer,
    productDetail: productDetailReducer,
    reviews: ReviewReducer,
    purchaseItem: purchaseItemReducer
});

export default persistReducer(persistConfig, rootReducer);