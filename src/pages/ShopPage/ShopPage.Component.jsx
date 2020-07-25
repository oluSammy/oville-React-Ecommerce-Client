import React from 'react';
import './ShopPage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import Category from '../../components/Category/Category.component';
import ShopHighlight from './../../components/Shop-Highlight/ShopHighlight.component';



const ShopPage = () => (
    <div className="shop-page">
        <div className="shop-page__nav">
            <NavBar/>
        </div>
        <div className="shop-page__category">
            <Category/>
        </div>
        <div className="shop-page__highlight">
            <ShopHighlight/>
        </div>
    </div>
);

export default ShopPage;