import React from 'react';
import './FeaturedProducts.scss';
import Featured from '../Featured/Featured.component';
import { selectProductHighlightsSlice, selectIsGettingHighlights } from './../../Redux/products/products.selectors';
import { connect } from 'react-redux';



const FeaturedProducts = ({ isGettingHighlights, highlights }) => (
    <div className="featured-products">
        <h1 className="featured-products__heading">Featured</h1>
        {
            isGettingHighlights ? 
                ''
            : ''
        }        
        {
             highlights ? highlights.map(highlight => {
                const randomNo = Math.floor(Math.random() * 7) + 1;
                return <Featured key={`${highlight.products[randomNo].id}`} 
                    productId={highlight.products[randomNo].id} productData={highlight.products[randomNo].data}
                />
            }): ''
        }
    </div>
);

const mapStateTOProps = state => ({
    isGettingHighlights: selectIsGettingHighlights(state),
    highlights: selectProductHighlightsSlice(state)
})

export default connect(mapStateTOProps)(FeaturedProducts);