import React from 'react';
import './Market.styles.scss';

import ShopHighlight from '../Shop-Highlight/ShopHighlight.component';
import { connect } from 'react-redux';
import { selectProductHighlightsSlice, selectIsGettingHighlights } from './../../Redux/products/products.selectors';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';



class Market extends React.Component {
    
    render() {
        const { isGettingHighlights, productHighlights } = this.props;
        
        return (
            <div className="market">                
                {
                    isGettingHighlights ?
                        <div style={{width: 'fit-content', margin: '0 auto', marginTop: '4rem'}}>
                            <Loader
                                type="TailSpin"
                                color="#111E6C"
                                height={80}
                                width={80}          
                                    
                            />
                        </div>
                    :
                    productHighlights.map(
                        highlight => <ShopHighlight key={highlight.category} category={highlight.category} products={highlight.products}/>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isGettingHighlights: selectIsGettingHighlights(state),
    productHighlights: selectProductHighlightsSlice(state)
});


export default connect(mapStateToProps) (Market);