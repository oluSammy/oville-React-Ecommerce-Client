import React from 'react';
import './Homepage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import Category from './../../components/Category/Category.component';
import CarouselBanner from './../../components/Carousel-Banner/CarouselBanner.component';
import FeaturedProducts from '../../components/Featured-Products/FeaturedProducts.component';
import Market from '../../components/Market/Market.component';


const HomePage = () => (
    <div className="homepage">
        <div className="homepage__nav">
            <NavBar/>
        </div>
        <div className="homepage__category">
            <Category/>
        </div>
        <div className="homepage__carousel">
            <CarouselBanner />
        </div>
        <div className="homepage__featured">
            <FeaturedProducts/>
        </div>
        <div className="homepage__market">
            <Market/>
        </div>
    </div>
);

export default HomePage;