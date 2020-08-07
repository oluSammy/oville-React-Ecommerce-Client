import React from 'react';
import './Category.style.scss';

import { Link } from 'react-router-dom';

import { BsArrowReturnRight } from 'react-icons/bs';
import { connect } from 'react-redux';
import { selectCategorySlice, isGettingCategorySlice } from '../../Redux/category/category.selectors';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';




class Category extends React.Component {

    render() {
        const { categorySlice, isGettingCategories } = this.props;
        
        return (
            <div className="category">
                <h2 className="category__heading">Categories</h2>
                <ul className="category__list">
                    {
                        isGettingCategories ? 
                            <Loader
                                type="ThreeDots"
                                color="#03045e"
                                height={70}
                                width={70}
                                style={{margin: 'auto auto', width: '50%', marginTop: '40%'}}               
                            />
                        :  categorySlice ? categorySlice.map(category => {
                            return(
                                <li key={category.categoryName}>                    
                                    <BsArrowReturnRight className="category__icon"/>
                                    <Link to={`/shop/${category.categoryName}`} className="category__list--item">
                                        {category.categoryName}
                                    </Link>
                                </li>
                            )
                        }) : ''
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categorySlice: selectCategorySlice(state),
    isGettingCategories: isGettingCategorySlice(state)
});


export default connect(mapStateToProps) (Category);
