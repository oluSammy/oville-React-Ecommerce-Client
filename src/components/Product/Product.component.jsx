import React from 'react';
import './Product.styles.scss';
import { Link } from 'react-router-dom';

const Product = ({ productId, productData: { productName, imgUrl, price, description} }) => (
    <div className="product">
        <div className="product__top">
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
                <Link to="/purchase" className="btn-buy">Buy Now</Link>
                <button className="btn-cart">Add To Cart</button>
            </div>
        </div>
    </div>
);

const limitSentence = (sentence) => {
    const words = sentence.split(" ");

    if(words.length > 16 )
        return `${words.slice(0, 15).join(" ")}...`;
    return sentence;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Product;