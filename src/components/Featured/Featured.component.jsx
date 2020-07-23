import React from 'react';
import './Featured.style.scss';

import Acer from '../../assets/img/Acer.png';

const Featured = () => (
    <div className="featured">
        <figure className="featured__img-container">
            <img src={Acer} alt="featured product" className="featured__img"/>
        </figure>
        <h5 className="featured__name">Acer 15</h5>
        <p className="featured__price">&#8358; 120000</p>
        <button className="btn-buy">Buy Now</button>
        <button className="btn-cart">Add To Cart</button>

    </div>
);

export default Featured;