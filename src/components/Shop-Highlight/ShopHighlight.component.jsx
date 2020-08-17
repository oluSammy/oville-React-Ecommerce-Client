import React from 'react';
import './ShopHighlight.styles.scss';
import Product from './../Product/Product.component';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const ShopHighlight = ({ category, products, isShopPage }) => (
    <Slide  bottom>
        <div className="shop-highlight">
            <div className="shop-highlight__heading">
                <h3 className="shop-highlight__name">{category}</h3>
                <h6 className="shop-highlight__deal">Deal Of the day || up to 23% off</h6>
                {
                    !isShopPage ?
                        <Link to={`shop/${category}`} className="shop-highlight__link">Shop </Link> 
                    :
                        ''
                }
                <span className="shop-highlight__arr"> <TiShoppingCart/></span>
            </div>
            <div className="shop-highlight__content">
                {
                    products.map(product => <Product key={product.id} productId={product.id} productData={product.data} /> )
                }
            </div>
        </div>

    </Slide  >
);

export default ShopHighlight