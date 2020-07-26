import React from 'react';
import './CartPage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import CartItem from '../../components/Cart-Item/CartItem.component';

import { Link } from 'react-router-dom';



const CartPage = () => (
    <div className="cart-page">
        <div className="cart-page__nav">
            <NavBar/>
        </div>
        <h2 className="cart-page__heading">Cart (3) items</h2>
        <div className="cart">
            <h5 className="cart__item cart__heading">Item</h5>
            <h5 className="quantity cart__heading">Quantity</h5>
            <h5 className="quantity cart__heading">Unit Price</h5>
            <h5 className="quantity cart__heading">Sub Total</h5>
        </div>
        <div className="cart-page__items">
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
        <div className="cart-page__total">
            <h4>Total:</h4>
            <p>&#8358; 629,000</p>
        </div>     
        <div className="cart-page__btn">
            <Link className="btn-cart btn-shop">Continue Shopping</Link>
            <button className="btn-buy">Proceed To Checkout</button>    
        </div>  
    </div>
);

export default CartPage;