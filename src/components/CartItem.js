import React from 'react'

export default function CartItem({cartItem, removeFromCart, quantities}) {

    function handleRemove() {
        removeFromCart(cartItem.id, cartItem)
    }


    return(
        <div className="cart-item">
            <div>{cartItem.name}</div>
            <div>${cartItem.price}</div>
            <div>Quantity: {quantities[cartItem.name+'s']}</div>
            <button onClick={handleRemove}>Remove from cart</button>
        </div>
    )
}