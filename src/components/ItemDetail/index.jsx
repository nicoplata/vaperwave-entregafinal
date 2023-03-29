import './ItemDetail.css';
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    console.log(data)

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity)
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detailImage" src={data.image} alt={data.title} />
                <div className="content" >
                    <h1>{data.title}</h1>
                    {
                        goToCart 
                            ? <Link to='/cart'>Finalizar compra</Link>
                            : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail; 