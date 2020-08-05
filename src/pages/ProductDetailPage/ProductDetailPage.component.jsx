import React from 'react';
import './ProductDetail.style.scss';

import NavBar from '../../components/NavBar/Navbar.components';
import Review from '../../components/Review/Review.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asyncGetProductDetail } from '../../Redux/ProductDetail/product-detail.actions';
import { isGettingProductDetailSlice, selectProductDetailSlice } from '../../Redux/ProductDetail/product-detail.selectors';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { numberWithCommas } from '../../utility-functions/utilityFunctions';



class ProductDetailPage extends React.Component {

    async componentDidMount() {
        const {  match:{ params: { id } }, getProductDetail } = this.props;
        await getProductDetail(id);
    }

    render() {
        const { isGettingProductDetail, productDetail: { imgUrl, productName, price, description } } = this.props;
        
        return (
            <div className="product-detail">
                <div className="product-detail__nav">
                    <NavBar/>
                </div>
                <div className="product-detail__image">
                    {
                        isGettingProductDetail ? 
                            <Loader
                                type="ThreeDots"
                                color="#03045e"
                                height={70}
                                width={70}
                                style={{margin: 'auto auto', width: '30%', marginTop: '15%', marginBottom: '15%'}}               
                            />:
                            <div>
                                <figure className="product-detail__image--container">
                                    <img src={imgUrl} alt="product" className="product-detail__img"/>
                                </figure>
                                <button className="btn-buy">Buy Now</button>
                                <button className="btn-cart">Add To Cart</button>
                            </div>

                    }
                </div>
                <div className="product-detail__description">
                    {
                        isGettingProductDetail ?
                            <Loader
                                type="Oval"
                                color="#03045e"
                                height={40}
                                width={40}
                                style={{margin: 'auto auto', width: '30%', marginTop: '15%', marginBottom: '15%'}}               
                            />
                        : 
                            <div>
                                <h2 className="product-detail__description--name">{productName}</h2>
                                <h6 className="product-detail__description--price">&#8358; {numberWithCommas(`${price}`)} </h6>
                                <p className="product-detail__description--detail">
                                    {description}                                    
                                </p> 
                            </div>

                    }
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
        )
    }
};

const mapStateToProps = state =>  ({
    isGettingProductDetail: isGettingProductDetailSlice(state),
    productDetail: selectProductDetailSlice(state)
});

const mapDispatchToProps = dispatch => ({
    getProductDetail: productId => dispatch(asyncGetProductDetail(productId))
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)
    (ProductDetailPage)
);