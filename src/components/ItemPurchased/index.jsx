import React from "react";
import './ItemPurchased.css'

const ItemPurchased = ({ product }) => {

    return(
        <div className="itemPurchased">
            <img src={product.image} alt={product.title} />
            <div>
                <p>producto: {product.title}</p>
                <p>cantidad: {product.quantity}</p>
                <p>precio: ${product.price}</p>
                <p>subtotal: ${product.quantity*product.price}</p>
            </div>
        </div>
    )
}

export default ItemPurchased