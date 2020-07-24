import React from 'react';
import './Product.styles.scss';
import productImg from '../../assets/img/Acer.png';

const Product = () => (
    <div className="product">
        <figure className="product__img-container">
            <img src={productImg} alt="Acer" className="product__img"/>
        </figure>
        <h6 className="product__name">Hp EliteBook</h6>
        <p className="product__price">&#8358; 790,000</p>
        <button className="btn-buy">Buy Now</button>
        <button className="btn-cart">Add To Cart</button>
    </div>
);

export default Product;