import React from 'react'
import CartItem from './CartItem'

export default function Cart({cartItems, removeFromCart, quantities}) {
    
    let overallTotal = 0
    for (let i = 0; i < cartItems.length; i++) {
        let totals = Number(`${quantities[cartItems[i].name+'s'] * cartItems[i].price}`)
        cartItems[i].totals = totals
        console.log(cartItems[i]);
        overallTotal+=cartItems[i].totals
    }


    return(
        <div className="cart-container">
        {cartItems.map((cartItem)=> <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={removeFromCart} quantities={quantities}/>)}
        <div className="total">Total: {overallTotal}</div>
        </div>
    )
}