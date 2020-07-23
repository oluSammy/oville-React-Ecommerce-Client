import React from 'react';
import './FeaturedProducts.scss';
import Featured from '../Featured/Featured.component';


const FeaturedProducts = () => (
    <div className="featured-products">
        <h1 className="featured-products__heading">Featured</h1>
        <Featured/>
        <Featured/>
        <Featured/>
    </div>
);

export default FeaturedProducts;