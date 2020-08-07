import React from 'react';
import './CartItem.style.scss';

import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { numberWithCommas } from '../../utility-functions/utilityFunctions';


const CartItem = ({ name, image, quantity, price, totalPrice, decrement, increment }) => (
    <div className="cart-item">
        <div className="cart-item__item">
            <figure className="cart-item__item--image">
                <img src={image} alt="item"/>
            </figure>
            <h4 className="cart-item__item--name">{name}</h4>
        </div>
        <div className="cart-item__quantity">
            <AiOutlineMinusCircle className="cart-item__quantity--icon cart-item__quantity--minus" onClick={()=> decrement()}/>
            <p>{quantity}</p>
            <BsPlusCircle className="cart-item__quantity--icon cart-item__quantity--plus" onClick={()=> increment()} />
        </div>
        <p className="cart-item__price">&#8358; {numberWithCommas(price)}</p>
        <p className="cart-item__price">&#8358; {numberWithCommas(totalPrice)}</p>
    </div>
);

export default CartItem;