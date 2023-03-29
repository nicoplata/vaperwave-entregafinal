import React from "react";
import { useCartContext } from "../../context/CartContext";
import './itemCart.css'

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return(
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
                <p>producto: {product.title}</p>
                <p>cantidad: {product.quantity}</p>
                <p>precio: ${product.price}</p>
                <p>subtotal: ${product.quantity*product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart