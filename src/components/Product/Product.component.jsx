import React from 'react';
import './Product.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import { limitSentence, numberWithCommas } from './../../utility-functions/utilityFunctions';
import { connect } from 'react-redux';
import { addCartItem } from './../../Redux/Cart/cart.actions';
import { toast } from 'react-toastify';


const Product = ({ productId, productData, history, addItem }) => {
    const { productName, imgUrl, price, description } = productData;
    const cartItem = {...productData, id: productId, subTotal: price};

    const handleCartAddition = (cartItem) => {
        toast(`${productName} added to cart`, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        addItem(cartItem)
    }

    
    return(
        <div className="product">
            <div className="product__top" onClick={()=>history.push(`/product/${productId}`)}>
                <figure className="product__img-container">
                    <img src={imgUrl} alt="Acer" className="product__img"/>
                </figure>
                <h6 className="product__name">{productName}</h6>
                <p className="product__price">&#8358; {numberWithCommas(price)}</p>
            </div>
            <div className="product__description">
                <p className="product__description--text">
                    {
                        limitSentence(description)
                    }
                </p>
                <div className="product__btn">
                    <Link to={`/purchase/${productId}`} className="btn-buy">Buy Now</Link>
                    <button className="btn-cart" onClick={()=> handleCartAddition(cartItem)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
} ;

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addCartItem(item))
})

export default withRouter(
    connect(null, mapDispatchToProps)(Product)
);