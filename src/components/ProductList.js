import React from 'react'
import Product from './Product'

export default function ProductList({products, addToCart, instock}) {
    return(
        <div className="products">
        {products.map((product)=> {
            return <Product key={product.id} product={product} addToCart={addToCart} instock={instock}/>
        })}
        </div>
    )
}