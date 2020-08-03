import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import categoryReducer from './category/category.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['category']
}

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);