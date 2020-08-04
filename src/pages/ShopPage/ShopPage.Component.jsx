import React from 'react';
import './ShopPage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import Category from '../../components/Category/Category.component';
import ShopHighlight from './../../components/Shop-Highlight/ShopHighlight.component';

import { withRouter } from 'react-router-dom';



class ShopPage extends React.Component {
    render() {
        return (
            <div className="shop-page">
                <div className="shop-page__nav">
                    <NavBar/>
                </div>
                <div className="shop-page__category">
                    <Category/>
                </div>
                <div className="shop-page__highlight">
                    {/* <ShopHighlight/> */}
                    {this.props.match.params.id}
                </div>
            </div>
        )
    }
}

export default withRouter(ShopPage);