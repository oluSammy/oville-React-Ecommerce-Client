import React from 'react';
import './Product.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import { limitSentence, numberWithCommas } from './../../utility-functions/utilityFunctions';




const Product = ({ productId, productData: { productName, imgUrl, price, description}, history }) => (
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
                <button className="btn-cart">Add To Cart</button>
            </div>
        </div>
    </div>
);


export default withRouter(Product);