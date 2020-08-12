import { firestore } from '../../firebase/firebase.utils';
import swal from 'sweetalert';
const { productsActionTypes } = require("./products.types");

// import 

const getProductHighlightsStart = () => ({
    type: productsActionTypes.GET_PRODUCTS_HIGHLIGHT_START
});

const getProductHighlightsSuccess = productHighlights => ({
    type: productsActionTypes.GET_PRODUCTS_HIGHLIGHT_SUCCESS,
    payload: productHighlights
});

const getProductHighlightsFailure = error => ({
    type: productsActionTypes.GET_PRODUCTS_HIGHLIGHT_FAILURE,
    payload: error
});



export const asyncGetProductsHighlights = () => {
    return async dispatch => {
        try {
            dispatch(getProductHighlightsStart());
            const highlights = [];

            const laptops = [];
            const desktops = [];
            const phones = [];

            const productsRef = firestore.collection('products');
            const getLaptops = await productsRef.where('category', '==', 'laptops').limit(8).get();
            const getDesktops = await productsRef.where('category', '==', 'desktops').limit(8).get();
            const getPhones = await productsRef.where('category', '==', 'phones').limit(8).get();

            getLaptops.docs.forEach(doc => {
                laptops.push({ id: doc.id, data: doc.data() });
            });
            getDesktops.docs.forEach(doc => {
                desktops.push({ id: doc.id, data: doc.data() });
            });
            getPhones.docs.forEach(doc => {
                phones.push({ id: doc.id, data: doc.data() });
            });

            highlights.push({ category: 'laptops', products: laptops })
            highlights.push({ category: 'desktops', products: desktops })
            highlights.push({ category: 'phones', products: phones })

            dispatch(getProductHighlightsSuccess(highlights));
        } catch (error) {
            dispatch(getProductHighlightsFailure(error));   
                swal({
                    title: "Error!",
                    text: "An Error occurred, try again",
                    icon: "warning",
                    button: "ok",
                });
        }
    }
}

const getShopProductsStart = () => ({
    type: productsActionTypes.GET_SHOP_PRODUCTS_START
});

const getShopProductsSuccess = (shopProducts) => ({
    type: productsActionTypes.GET_SHOP_PRODUCTS_SUCCESS,
    payload: shopProducts
});

const getShopProductsFailure = (error) => ({
    type: productsActionTypes.GET_SHOP_PRODUCTS_FAILURE,
    payload: error
});

export const asyncGetShopProducts = (shopId) => {
    return async dispatch => {
        try {
            dispatch(getShopProductsStart());
            const productsRef = firestore.collection('products');
            
            const shopProducts = [];
            const products = await productsRef.where('category', '==', shopId).get();
            
            products.docs.forEach(doc => {
                shopProducts.push({ id: doc.id, data: doc.data() });
            });

            dispatch(getShopProductsSuccess(shopProducts));

        } catch (error) {
            dispatch(getShopProductsFailure(error));
            
            swal({
                title: "Error!",
                text: "An Error occurred, try again",
                icon: "warning",
                button: "ok",
            });
        }
    }
}