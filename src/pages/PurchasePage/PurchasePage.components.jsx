import React from 'react';
import './PurchasePage.styles.scss';
import NavBar from './../../components/NavBar/Navbar.components';
import CartItem from '../../components/Cart-Item/CartItem.component';



const PurchasePage = () => (
    <div className="purchase">
        <div className="purchase__nav">
            <NavBar/>
        </div>
        <div className="cart" style={{marginTop: '3rem'}}>
            <h5 className="cart__item cart__heading">Item</h5>
            <h5 className="quantity cart__heading">Quantity</h5>
            <h5 className="quantity cart__heading">Unit Price</h5>
            <h5 className="quantity cart__heading">Total</h5>
        </div>
        <div className="purchase__cart">
            <CartItem/>
        </div>
        <div className="purchase__btn">
        <button className="btn-buy" style={{padding: '1rem 2rem', marginTop: '2rem'}}>Proceed To Payment</button>
        </div>
    </div>
);

export default PurchasePage;