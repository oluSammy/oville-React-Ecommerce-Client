import React from 'react';
import './Homepage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import Category from './../../components/Category/Category.component';
import CarouselBanner from './../../components/Carousel-Banner/CarouselBanner.component';




const HomePage = () => (
    <div className="homepage">
        <NavBar/>
        <Category/>
        <CarouselBanner/>
    </div>
);

export default HomePage;