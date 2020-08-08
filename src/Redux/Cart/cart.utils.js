export const addNewCartItem = (cartItems, itemToAdd) => {
    const isAlreadyInCart = cartItems.some(cartItem => cartItem.id === itemToAdd.id);

    if(isAlreadyInCart) {
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1, subTotal: cartItem.subTotal + cartItem.price}
            : {...cartItem}
        )
    } else {
        return [...cartItems, {...itemToAdd, quantity: 1}]
    }
}

export const cartReduction = (cartItems, itemToRemove) => {
    const item = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if(item.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    } else {
        return cartItems.map(cartItem => 
            cartItem.id === itemToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1, subTotal: cartItem.subTotal - cartItem.price}
            : cartItem
        )
    }
}