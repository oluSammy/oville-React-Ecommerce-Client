import React from 'react';
import './Product.styles.scss';
import productImg from '../../assets/img/Acer.png';

const Product = () => (
    <div className="product">
        <div className="product__top">
            <figure className="product__img-container">
                <img src={productImg} alt="Acer" className="product__img"/>
            </figure>
            <h6 className="product__name">Hp EliteBook</h6>
            <p className="product__price">&#8358; 790,000</p>
        </div>
        <div className="product__description">
            <p className="product__description--text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, odit? 
                Lorem ipsum dolor.
            </p>
            <div className="product__btn">
                <button className="btn-buy">Buy Now</button>
                <button className="btn-cart">Add To Cart</button>
            </div>
        </div>
    </div>
);

export default Product;