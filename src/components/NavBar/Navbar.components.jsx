import React from 'react';
import './Navbar.styles.scss';

// React icons
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowReturnRight } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';

//React router
import { Link, NavLink } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { selectUserSlice } from './../../Redux/user/user.selectors';
import { selectCategorySlice, isGettingCategorySlice } from './../../Redux/category/category.selectors';
import { selectCartItemsCount } from '../../Redux/Cart/cart.selectors';

//firebase
import { auth } from './../../firebase/firebase.utils';


const NavBar = ({ currentUser, categories, isGettingCategories, cartCount }) =>  (
    <div className="navbar navbar__home">
        <Link to="/" className="navbar__logo ">
            <figure className="navbar__logo--icon">
                <img src={require("../../assets/img/favicon-96x96.png")} alt="oville logo" className="navbar__logo--icon-img"/>
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
                    {
                        isGettingCategories ?
                            <p>Loading</p>
                        : 
                        categories ? categories.map(category => 
                                <NavLink to={`/shop/${category.categoryName}`} className="navbar__dropdown--item" key={category.categoryName}> 
                                    <BsArrowReturnRight/> {category.categoryName}
                                </NavLink> 
                            ) : ''
                    }
                </div>
            </li>
            {
                !currentUser ?
                    <li className="navbar__list--item">
                        <NavLink to="/signin" className="navbar__list--link">Log in</NavLink>    
                    </li> :
                    ''                
            }

            {
                !currentUser ? 
                    <li className="navbar__list--item">
                        <NavLink to="/signup" className="navbar__list--link">Sign Up</NavLink>
                    </li> : 

                    <li className="navbar__list--item">
                        <p onClick={() => auth.signOut()} className="navbar__list--link" style={{cursor: 'pointer'}}>Sign Out</p>
                    </li>
            }
            
            
            <Link to="/cart" className="navbar__list--item navbar__list--cart-container">
                <AiOutlineShoppingCart className="navbar__list--icon"/>
                <p className="navbar__list--cart">{cartCount}</p>
            </Link>
        </ul>
    </div>
);

const mapStateToProps = state => ({
    currentUser: selectUserSlice(state),
    categories: selectCategorySlice(state),
    isGettingCategories: isGettingCategorySlice(state),
    cartCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps) (NavBar);