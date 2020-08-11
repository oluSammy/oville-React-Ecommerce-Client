import React from 'react';
import './PurchasePage.styles.scss';
import NavBar from './../../components/NavBar/Navbar.components';
import CartItem from '../../components/Cart-Item/CartItem.component';
import { connect } from 'react-redux';
import { asyncGetPurchaseItem, IncrementPurchaseItem, decrementPurchaseItem } from './../../Redux/Purchase-Item/purchaseItem.actions';
import { withRouter } from 'react-router-dom';

import { isGettingPurchaseItem, selectPurchaseItemSlice, selectPurchaseQuantitySlice, selectUnitPrice, selectTotalPrice }
from '../../Redux/Purchase-Item/purchaseItem.selectors';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import StripeCheckoutButton from '../../components/Stripe-Button/stripe-button.component';


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
                            <div style={{width: 'fit-content', margin: '0 auto', marginTop: '4rem'}}>
                                <Loader
                                    type="ThreeDots"
                                    color="#111E6C"
                                    height={50}
                                    width={50}

                                />
                            </div>
                        :
                        <CartItem name={purchaseItem.productName} image={purchaseItem.imgUrl}
                            quantity={purchaseQuantity} price={purchaseUnitPrice} totalPrice={totalPrice}
                            decrement={decrementQuantity} increment={incrementQuantity} purchase={true}
                        />
                    }
                </div>
                <div className="purchase__btn" style={{textAlign: 'center', marginTop: '2rem'}}>
                    <StripeCheckoutButton price={totalPrice} />
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