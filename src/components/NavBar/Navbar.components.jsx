import React from 'react';
import './Navbar.styles.scss';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
    <div className="navbar navbar__home">
        <Link to="/" className="navbar__logo ">
            <figure className="navbar__logo--icon">
                <img src={require("../../assets/img/oville.png")} alt="oville logo" className="navbar__logo--icon-img"/>
            </figure>
            <p className="navbar__logo--text">Oville</p>
        </Link>
        <form className="navbar__form">
            <input type="search" name="search" id="search" placeholder="Search" className="navbar__form--input"/>
            <button type="submit" className="navbar__form--submit"> <AiOutlineSearch className="navbar__form--icon"/> </button>
        </form>
        <ul className="navbar__list">
            <li className="navbar__list--item">
                <NavLink to="/signin" className="navbar__list--link">Log in</NavLink>    
            </li>
            <li className="navbar__list--item">
                <NavLink to="/signup" className="navbar__list--link">Sign Up</NavLink>
            </li>
            <li className="navbar__list--item navbar__list--cart-container">
                <AiOutlineShoppingCart className="navbar__list--icon"/>
                <p className="navbar__list--cart">23</p>
            </li>
        </ul>
    </div>
);

export default NavBar;