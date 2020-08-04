import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import categoryReducer from './category/category.reducer';
import productsReducer from './products/products.reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['category', 'products']
}

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    products: productsReducer
});

export default persistReducer(persistConfig, rootReducer);