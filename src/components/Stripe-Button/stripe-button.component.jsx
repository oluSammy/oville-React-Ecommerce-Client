import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import image from '../../assets/img/favicon-96x96.png';
import { connect } from 'react-redux';
import { emptyCart } from '../../Redux/Cart/cart.actions';
import swal  from 'sweetalert';



const StripeCheckoutButton = ({ price, emptyCartItems, isCart }) => {
    const stripePrice = 100 * price;
    const publishableKey = 'pk_test_RXMKhe3pI2oRHmSOAzW11s9F00ffuBsNbk'

    const onToken = token => {
        swal("Done!", "Payment Successful", "success");
        if(isCart){
            emptyCartItems();
        }
    }

    return (
        <StripeCheckout 
            name='Oville'
            description='Gadgets E-commerce website'
            amount={stripePrice}
            shippingAddress
            billingAddress
            currency='NGN'
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