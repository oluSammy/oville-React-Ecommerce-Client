import React from 'react';
import './PurchasePage.styles.scss';
import NavBar from './../../components/NavBar/Navbar.components';
import CartItem from '../../components/Cart-Item/CartItem.component';
import { connect } from 'react-redux';
import { asyncGetPurchaseItem, IncrementPurchaseItem, decrementPurchaseItem } from './../../Redux/Purchase-Item/purchaseItem.actions';
import { withRouter } from 'react-router-dom';

import { isGettingPurchaseItem, selectPurchaseItemSlice, selectPurchaseQuantitySlice, selectUnitPrice, selectTotalPrice } 
from '../../Redux/Purchase-Item/purchaseItem.selectors'


class PurchasePage extends React.Component {

    async componentDidMount() {
        const { match:{ params: { id } }, getPurchaseItem } = this.props;
        await getPurchaseItem(id);
    }

    render() {
        const { isGettingItems, purchaseItem, purchaseQuantity, purchaseUnitPrice, 
                totalPrice, incrementQuantity, decrementQuantity } = this.props;

        return(
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
                    {
                        isGettingItems ? 
                            'loading'
                        : 
                        <CartItem name={purchaseItem.productName} image={purchaseItem.imgUrl} 
                            quantity={purchaseQuantity} price={purchaseUnitPrice} totalPrice={totalPrice}
                            decrement={decrementQuantity} increment={incrementQuantity}
                        />
                    }
                </div>
                <div className="purchase__btn">
                <button className="btn-buy" style={{padding: '1rem 2rem', marginTop: '2rem'}}>Proceed To Payment</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isGettingItems: isGettingPurchaseItem(state),
    purchaseItem: selectPurchaseItemSlice(state),
    purchaseQuantity: selectPurchaseQuantitySlice(state),
    purchaseUnitPrice: selectUnitPrice(state),
    totalPrice: selectTotalPrice(state)
});

const mapDispatchToProp = dispatch => ({
    getPurchaseItem: id => dispatch(asyncGetPurchaseItem(id)),
    incrementQuantity: () => dispatch(IncrementPurchaseItem()),
    decrementQuantity: () => dispatch(decrementPurchaseItem())
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProp) (PurchasePage)
);