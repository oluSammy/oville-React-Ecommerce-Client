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
import { asyncAddReview, asyncGetReviews } from '../../Redux/Reviews/Reiews.actions';
import { selectIsAddingReviewsSlice, selectIsGettingReviews, selectReviewsSlice, selectIsReviewsEmpty } from '../../Redux/Reviews/Reviews.selectors';


class ProductDetailPage extends React.Component {

    state = {
        review: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { match:{ params: { id } }, addReview } = this.props;
        await addReview(id, this.state.review);
        this.setState({ review: '' });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async componentDidMount() {
        const {  match:{ params: { id } }, getProductDetail, getReviews } = this.props;
        await getProductDetail(id);
        await getReviews(id);
    }

    render() {
        const { isGettingProductDetail, productDetail: { imgUrl, productName, price, description }, 
                isAddingReview, isGettingReviews, reviews, isReviewsEmpty } = this.props;
        const duplicate = [];
            
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
                        <div>
                            { 
                                isGettingReviews ?                                   
                                    <Loader
                                        type="ThreeDots"
                                        color="#03045e"
                                        height={30}
                                        width={30}
                                        style={{marginTop: '1.5rem', marginLeft: '20%'}} 
                                    />
                                :
                                    isReviewsEmpty ?
                                    <p style={{fontSize: '1.4rem'}}>No Reviews Yet</p> :
                                    reviews.map(review => 
                                        <Review key={review.createdAt} review={review.review} createdAt={review.createdAt}/>
                                    )
                            }                            
                        </div>
                    </div>
                    <div className="product-detail__add">
                        <form className="review__form" onSubmit={this.handleSubmit}>
                            <textarea onChange={this.handleChange} value={this.state.review}
                                name="review" id="review" cols="50" rows="4" placeholder="Add Review" 
                                className="review__form--input" required>
                            </textarea>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                {
                                    isAddingReview ? 
                                        <Loader
                                            type="Oval"
                                            color="#03045e"
                                            height={20}
                                            width={20}
                                            style={{marginTop: '1.5rem', marginRight: '1.5rem'}} 
                                        /> :
                                    ''

                                }
                                <button type="submit" className="review__submit btn-buy" disabled={isAddingReview}>Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state =>  ({
    isGettingProductDetail: isGettingProductDetailSlice(state),
    productDetail: selectProductDetailSlice(state),
    isAddingReview: selectIsAddingReviewsSlice(state),
    isGettingReviews: selectIsGettingReviews(state),
    reviews: selectReviewsSlice(state),
    isReviewsEmpty: selectIsReviewsEmpty(state)

});

const mapDispatchToProps = dispatch => ({
    getProductDetail: productId => dispatch(asyncGetProductDetail(productId)),
    addReview: (productId, review) => dispatch(asyncAddReview(productId, review)),
    getReviews: (productId) => dispatch(asyncGetReviews(productId))
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)
    (ProductDetailPage)
);