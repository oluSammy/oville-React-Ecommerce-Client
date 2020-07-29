import React from 'react';
import './Navbar.styles.scss';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowReturnRight } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
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
            <li className="navbar__list--item navbar__dropdown">
                <p className="navbar__dropdown--btn navbar__list--link">
                    <span>Categories</span>                     
                    <RiArrowDropDownLine className="navbar__dropdown--icon"/> 
                </p>
                <div className="navbar__dropdown--content">
                    <NavLink to="/" className="navbar__dropdown--item"> <BsArrowReturnRight/> Laptops</NavLink>
                    <NavLink to="/" className="navbar__dropdown--item"><BsArrowReturnRight/> Desktops</NavLink>
                    <NavLink to="/" className="navbar__dropdown--item"><BsArrowReturnRight/> Phones</NavLink>
                </div>
            </li>
            <li className="navbar__list--item">
                <NavLink to="/signin" className="navbar__list--link">Log in</NavLink>    
            </li>
            <li className="navbar__list--item">
                <NavLink to="/signup" className="navbar__list--link">Sign Up</NavLink>
            </li>
            <Link to="/cart" className="navbar__list--item navbar__list--cart-container">
                <AiOutlineShoppingCart className="navbar__list--icon"/>
                <p className="navbar__list--cart">23</p>
            </Link>
        </ul>
    </div>
);

export default NavBar;