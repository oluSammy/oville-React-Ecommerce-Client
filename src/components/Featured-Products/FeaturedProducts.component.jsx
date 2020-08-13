import React from 'react';
import './FeaturedProducts.scss';
import Featured from '../Featured/Featured.component';
import { selectProductHighlightsSlice } from './../../Redux/products/products.selectors';
import { connect } from 'react-redux';



const FeaturedProducts = ({ highlights }) => (
    <div className="featured-products">
        <h1 className="featured-products__heading">Featured</h1>
        {
            
            highlights ?
                highlights[0].products.length !==0 ? highlights.map(highlight => {
                const randomNo = Math.floor(Math.random() * 7) + 1;
                if(highlight.products[randomNo].id !== undefined) {
                    return <Featured key={`${highlight.products[randomNo].id}`} 
                        productId={highlight.products[randomNo].id} productData={highlight.products[randomNo].data}
                    />
                } return 1;
            }): '' : ''
        }
    </div>
);

const mapStateTOProps = state => ({
    highlights: selectProductHighlightsSlice(state)
})

export default connect(mapStateTOProps)(FeaturedProducts);