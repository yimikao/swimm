import React from 'react'

export default function Product({product, addToCart, instock}) {


    function handleAddToCart() {
        addToCart(product.id, product.name)
    }
    return(
        <div className="product-item">
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div>Instock: {instock[product.name+'s']}</div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}