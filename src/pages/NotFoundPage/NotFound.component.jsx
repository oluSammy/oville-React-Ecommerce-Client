import React from 'react';
import './NotFound.styles.scss';
import NavBar from './../../components/NavBar/Navbar.components';

import { Link } from 'react-router-dom';


const NotFound = () => (
    <div className="not-found">
        <NavBar />
        <div className="not-found__content">
            <h2 className="not-found__text">
                <span className="not-found__hm">Hmmmmmmmm....</span>
                <span className="not-found__page">We cant seem to find the page you're looking for.</span>
                <span className="not-found__error">Error code: 404</span>
            </h2>
            <div>

            </div>
            <Link to="/" className="not-found__btn">Back TO Home</Link>
        </div>
    </div>
);

export default NotFound;