import React from 'react';
import './ShopPage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';  
import Category from '../../components/Category/Category.component';
import ShopHighlight from './../../components/Shop-Highlight/ShopHighlight.component';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { asyncGetShopProducts } from '../../Redux/products/products.actions';
import { selectIsGettingShopProducts } from '../../Redux/products/products.selectors';
import { selectShopProductsSlice } from './../../Redux/products/products.selectors';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


class ShopPage extends React.Component {
    
    async componentDidMount() {
        const { getShopProducts, match: { params: { id } } } = this.props;
        await getShopProducts(id);
    }

    async componentDidUpdate(prevProps) {
        const { getShopProducts, match: { params: { id } } } = this.props;
        if(id !== prevProps.match.params.id) {
            await getShopProducts(id);
        }
    }

    render() {
        const { shopProducts, isGettingShopProducts, match: { params: { id } } } = this.props;

        return (
            <div className="shop-page">
                <div className="shop-page__nav">
                    <NavBar/>
                </div>
                <div className="shop-page__category">
                    <Category/>
                </div>
                <div className="shop-page__highlight">
                    {
                        isGettingShopProducts ? 
                            <div style={{width: 'fit-content', margin: '0 auto', marginTop: '4rem'}}>
                                <Loader
                                    type="TailSpin"
                                    color="#111E6C"
                                    height={80}
                                    width={80}          
                                        
                                />
                            </div>
                        :
                        <ShopHighlight category={id} products={shopProducts} isShopPage={true}/>
                        
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shopProducts: selectShopProductsSlice(state),
    isGettingShopProducts: selectIsGettingShopProducts(state)
})

const mapDispatchToProps = dispatch => ({
    getShopProducts: shopId => dispatch(asyncGetShopProducts(shopId))
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)
    (ShopPage)
);