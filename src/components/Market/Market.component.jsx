import React from 'react';
import './Market.styles.scss';

import ShopHighlight from '../Shop-Highlight/ShopHighlight.component';
import { connect } from 'react-redux';
import { selectProductHighlightsSlice, selectIsGettingHighlights } from './../../Redux/products/products.selectors';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import swal from 'sweetalert';



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
                     productHighlights ?
                     productHighlights[0].products.length !==0 ?  productHighlights.map(
                        highlight => 
                            <ShopHighlight key={highlight.category} category={highlight.category} products={highlight.products}/>
                    ) : 
                        <div className="market__error">
                            <h2 className="market__error--heading">Network Error:  
                                <span className="market__error--span"> You have lost network connectivity</span>
                            </h2> 
                            <h5 className="market__error--check">Please check your network settings and  
                                <span onClick={()=> window.location.reload()}
                                    className="market__error--refresh"> refresh the page 
                                </span>
                            </h5>
                        </div>
                    :''
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