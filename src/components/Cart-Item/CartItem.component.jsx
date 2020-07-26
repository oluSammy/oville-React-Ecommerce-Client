import React from 'react';
import './CartItem.style.scss';

import ProductImg from '../../assets/img/Acer.png';

import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai'

const CartItem = () => (
    <div className="cart-item">
        <div className="cart-item__item">
            <figure className="cart-item__item--image">
                <img src={ProductImg} alt="item"/>
            </figure>
            <h4 className="cart-item__item--name">Acer 15</h4>
        </div>
        <div className="cart-item__quantity">
            <AiOutlineMinusCircle className="cart-item__quantity--icon cart-item__quantity--minus"/>
            <p>4</p>
            <BsPlusCircle className="cart-item__quantity--icon cart-item__quantity--plus"/>
        </div>
        <p className="cart-item__price">&#8358; 270,000</p>
        <p className="cart-item__price">&#8358; 270,000</p>
    </div>
);

export default CartItem;