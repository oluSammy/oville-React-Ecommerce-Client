import React from 'react';
import './ShopHighlight.styles.scss';
import Product from './../Product/Product.component';

const ShopHighlight = () => (
    <div className="shop-highlight">
        <div className="shop-highlight__heading">
            <h3 className="shop-highlight__name">Laptops</h3>
            <h6 className="shop-highlight__deal">Deal Of the day || up to 23% off</h6>
            <a href="www.me.com" className="shop-highlight__link">See All </a> <span className="shop-highlight__arr">&#8611;</span>
        </div>
        <div className="shop-highlight__content">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
);

export default ShopHighlight