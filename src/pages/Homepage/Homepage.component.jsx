import React from 'react';
import './Homepage.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import Category from './../../components/Category/Category.component';



const HomePage = () => (
    <div className="homepage">
        <NavBar/>
        <Category/>
    </div>
);

export default HomePage;