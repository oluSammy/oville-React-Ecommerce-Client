import React from 'react';
import './CartPage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import CartItem from '../../components/Cart-Item/CartItem.component';

import { withRouter } from 'react-router-dom';
import { selectCartSlice, selectCartGrandTotal, selectCartItemsCount } from '../../Redux/Cart/cart.selectors';
import { connect } from 'react-redux';
import { addCartItem, removeCartItem, reduceCartItem } from '../../Redux/Cart/cart.actions';
import { numberWithCommas } from '../../utility-functions/utilityFunctions';


const CartPage = ({ cart, addItem, cartTotal, removeItem, reduceItem, history, cartCount }) => (
    <div className="cart-page">
        <div className="cart-page__nav">
            <NavBar/>
        </div>
        <h2 className="cart-page__heading">Cart {cartCount} items</h2>
        <div className="cart">
            <h5 className="cart__item cart__heading">Item</h5>
            <h5 className="quantity cart__heading">Quantity</h5>
            <h5 className="quantity cart__heading">Unit Price</h5>
            <h5 className="quantity cart__heading">Sub Total</h5>
        </div>
        <div className="cart-page__items">
            {
                cart.length === 0 ? 'NO items Yet' :
                cart.map(cart => <CartItem key={cart.id} id={cart.id} name={cart.productName} image={cart.imgUrl} 
                    quantity={cart.quantity} cartPrice={cart.price} cartTotalPrice={cart.subTotal} 
                    addItem={addItem} removeItem={removeItem} reduceItem={reduceItem} />)
            }
        </div>
        <div className="cart-page__total">
            <h4>Total:</h4>
            <p>&#8358; {numberWithCommas(cartTotal)}</p>
        </div>     
        <div className="cart-page__btn">
            <button onClick={() => history.goBack()} className="btn-cart btn-shop" style={{padding: '.8rem 2rem'}}>
                Continue Shopping
            </button>
            <button className="btn-buy">Proceed To Checkout</button>    
        </div>  
    </div>
);

const mapStateToProps = state => ({
    cart: selectCartSlice(state),
    cartTotal: selectCartGrandTotal(state),
    cartCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addCartItem(item)),
    removeItem: item => dispatch(removeCartItem(item)),
    reduceItem: item => dispatch(reduceCartItem(item))
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CartPage)
);