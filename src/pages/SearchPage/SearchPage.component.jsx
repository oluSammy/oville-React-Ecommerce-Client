import React from 'react';
import './SearchPage.styles.scss';
import NavBar from './../../components/NavBar/Navbar.components';
import Product from './../../components/Product/Product.component';



const SearchPage = () => (
    <div className="search-page">
        <div className="search-page__nav">
            <NavBar/>
        </div>
        <div className="search-page__results">
            <h2 className="search-page__heading">
                Showing results for Lorem, ipsum.
            </h2>
            <div className="search-page__items">
                <div style={{marginBottom: '1.4rem'}}>
                    <Product />
                </div>
                <div style={{marginBottom: '1.4rem'}}>
                    <Product />
                </div>
                <div style={{marginBottom: '1.4rem'}}>
                    <Product />
                </div>
            </div>
        </div>
    </div>
);

export default SearchPage;