import React from 'react';
import './CartItem.style.scss';

import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { numberWithCommas } from '../../utility-functions/utilityFunctions';
import { motion, AnimatePresence } from 'framer-motion';
import { cartChildVariants } from '../../Animations/cart.animations';


const CartItem = ({ name, image, quantity, price, totalPrice, decrement, increment, cartTotalPrice, 
    cartPrice, purchase, addItem, id, removeItem, reduceItem }) => {
    const productData = { imgUrl: image, id, price, productName: name, quantity, subTotal: cartTotalPrice}
    return(
        <AnimatePresence>
            <motion.div className="cart-item" key={id}
                variants={cartChildVariants}
            >
                <div className="cart-item__item">
                    <figure className="cart-item__item--image">
                        <img src={image} alt="item"/>
                    </figure>
                    <h4 className="cart-item__item--name">{name}</h4>
                </div>
                <div className="cart-item__quantity">
                    <AiOutlineMinusCircle className="cart-item__quantity--icon cart-item__quantity--minus" 
                        onClick={()=> purchase ? decrement() : reduceItem(productData)}
                    />
                    <p>{quantity}</p>
                    <BsPlusCircle className="cart-item__quantity--icon cart-item__quantity--plus" 
                        onClick={()=>  purchase ? increment() : addItem(productData)} 
                    />
                </div>
                <p className="cart-item__price">&#8358; { purchase ? numberWithCommas(price) : numberWithCommas(cartPrice)}</p>
                <p className="cart-item__price">&#8358; {  purchase ? numberWithCommas(totalPrice) : numberWithCommas(cartTotalPrice)}</p>
                {
                    purchase ? ''
                :       <div className="cart-item__cancel" onClick={() => removeItem(id)}>
                            <span>X</span>
                        </div>
                
                }
                {/* <span className="cart-" >X</span>         */}
            </motion.div>
        </AnimatePresence>
    )
} ;

export default CartItem;