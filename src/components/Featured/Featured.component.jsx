import React from 'react';
import './Featured.style.scss';
import { numberWithCommas } from '../../utility-functions/utilityFunctions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCartItem } from './../../Redux/Cart/cart.actions';
import { toast } from 'react-toastify';

const Featured = ({ productId, productData, addToCart }) => {
    const { productName, imgUrl, price } = productData;
    const cartItem = {...productData, id: productId, subTotal: price};

    const handleCartAddition = (cartItem) => {
        toast(`${productName} added to cart`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        addToCart(cartItem)
    }
    return(
        <div className="featured">
            <figure className="featured__img-container">
                <img src={imgUrl} alt="featured product" className="featured__img"/>
            </figure>
            <h5 className="featured__name">{productName}</h5>
            <p className="featured__price">&#8358; {numberWithCommas(price)}</p>
            <Link to={`/purchase/${productId}`} className="btn-buy">Buy Now</Link>
            <button onClick={() => handleCartAddition(cartItem)} className="btn-cart">Add To Cart</button>
        </div>
    )
} ;


const mapDispatchToProps = dispatch => ({
    addToCart: (item) => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(Featured);