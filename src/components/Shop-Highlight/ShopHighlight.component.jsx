import React from 'react';
import './ShopHighlight.styles.scss';
import Product from './../Product/Product.component';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
// &#8611;

const ShopHighlight = () => (
    <div className="shop-highlight">
        <div className="shop-highlight__heading">
            <h3 className="shop-highlight__name">Laptops</h3>
            <h6 className="shop-highlight__deal">Deal Of the day || up to 23% off</h6>
            <Link to="/shop" className="shop-highlight__link">Shop </Link> 
            <span className="shop-highlight__arr"> <TiShoppingCart/></span>
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