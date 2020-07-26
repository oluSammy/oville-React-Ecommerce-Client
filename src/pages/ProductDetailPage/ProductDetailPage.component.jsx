import React from 'react';
import './ProductDetail.style.scss';

import NavBar from '../../components/NavBar/Navbar.components';
import ProductImg from '../../assets/img/Acer.png';
import Review from '../../components/Review/Review.component';



const ProductDetailPage = () => (
    <div className="product-detail">
        <div className="product-detail__nav">
            <NavBar/>
        </div>
        <div className="product-detail__image">
            <figure className="product-detail__image--container">
                <img src={ProductImg} alt="product" className="product-detail__img"/>
            </figure>
            <button className="btn-buy">Buy Now</button>
            <button className="btn-cart">Add To Cart</button>
        </div>
        <div className="product-detail__description">
            <h2 className="product-detail__description--name">Hp EliteBook</h2>
            <h6 className="product-detail__description--price">&#8358;720,000</h6>
            <p className="product-detail__description--detail">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae ipsa commodi voluptate nihil ipsam!
            </p>
        </div>
        <div className="product-detail__reviews">
            <h3 className="product-detail__reviews--header">Reviews</h3>
            <div className="review-container">
                <Review/>
                <Review/>
            </div>
            <div className="product-detail__add">
                <form action="#" className="review__form">
                    <textarea 
                        name="review" id="review" cols="50" rows="4" placeholder="Add Review" 
                        className="review__form--input" required>
                    </textarea>
                    <button type="submit" className="review__submit btn-buy">Add Review</button>
                </form>
            </div>
        </div>
    </div>
);

export default ProductDetailPage;