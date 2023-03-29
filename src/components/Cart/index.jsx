import React from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0){
        return(
            <>
            <div className="text">
                <p>no hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </div>
            </>
        );
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className="text">
                <p>total: ${totalPrice()}</p> 
                <Link to='/formulario'>finalizar compra</Link>
            </div>
        </>
    )
}

export default Cart;