import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import image from '../../assets/img/favicon-96x96.png';
import { numberWithCommas } from '../../utility-functions/utilityFunctions';
import { connect } from 'react-redux';
import { emptyCart } from '../../Redux/Cart/cart.actions';



const StripeCheckoutButton = ({ price, emptyCartItems, isCart }) => {
    const stripePrice = 100 * price;
    const publishableKey = 'pk_test_RXMKhe3pI2oRHmSOAzW11s9F00ffuBsNbk'

    const onToken = token => {
        console.log(token);
        alert('payment successful');
        if(isCart){
            emptyCartItems();
        }
    }

    return (
        <StripeCheckout 
            name='Oville'
            description={`Total is N ${numberWithCommas(price)}`}
            amount={stripePrice}
            shippingAddress
            billingAddress
            currency='ngn'
            image={image}
            panelLabel='Pay'
            token={onToken}
            stripeKey={publishableKey}
            label='proceed with payment'
        />
    )
}

const mapDispatchToProps = dispatch => ({
    emptyCartItems: () => dispatch(emptyCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);