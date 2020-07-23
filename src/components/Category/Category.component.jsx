import React from 'react';
import './Category.style.scss';

import { BsArrowReturnRight } from 'react-icons/bs';

const Category = () => (
    <div className="category">
        <h2 className="category__heading">Categories</h2>
        <ul className="category__list">
            <li>
            {/* className="category-active" */}
                <BsArrowReturnRight className="category__icon"/>
                <a href="goal.com" className="category__list--item">Laptops</a>
            </li>
            <li>
                <BsArrowReturnRight className="category__icon"/>
                <a href="goal.com" className="category__list--item">Phones</a>
            </li>
            <li>
                <BsArrowReturnRight className="category__icon"/>
                <a href="goal.com" className="category__list--item">Desktops</a>
            </li>
            <li>
                <BsArrowReturnRight className="category__icon"/>
                <a href="goal.com" className="category__list--item">Assecories</a>
            </li>
            <li>
                <BsArrowReturnRight className="category__icon"/>
                <a href="goal.com" className="category__list--item">Network Equip...</a>
            </li>
        </ul>
    </div>
);

export default Category;